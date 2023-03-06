const fs = require("fs");
const path = require("path");
const NodeID3 = require("node-id3");

const directoryPath = "./";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("Error getting directory information.");
  } else {
    const mp3Files = files
      .filter((file) => path.extname(file).toLowerCase() === ".mp3")
      .map((file) => {
        const { name, ext } = path.parse(file);
        const [artist, title] = name.split("-").map((str) => str.trim());
        const source = path.join(directoryPath, file);
        const tags = NodeID3.read(source);
        const coverData = tags.image && tags.image.imageBuffer;
        const coverFilename = coverData ? `${name}.jpg` : null;
        if (coverData) {
          fs.writeFileSync(path.join(directoryPath, coverFilename), coverData);
        }
        return {
          cover: coverFilename,
          artist,
          title,
          source,
          uuid: "uuidv4();",
        };
      });
    console.log(mp3Files);
  }
});

// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// Define the directory where your files are stored
const downloadDirectory = path.join(__dirname, "../MEDIA/TBFKD");

// Serve static files from the 'downloads' directory
app.use("/downloads", express.static(downloadDirectory));

// Route to handle file downloads
app.get("/download", (req, res) => {
  const fileName = "yourfile.ext"; // Replace with your actual file name
  const filePath = path.join(downloadDirectory, fileName);
  res.download(filePath); // This will trigger a file download
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

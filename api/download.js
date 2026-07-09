export default function handler(req, res) {
  const { path } = req.query;

  const links = {
    latest: "https://github.com/Abidd11/Jkbose/releases/latest/download/JKBose.Helper.v9.8.apk",
    app: "https://github.com/Abidd11/Jkbose/releases/latest/download/JKBose.Helper.v9.8.apk",
    test: "https://github.com/Abidd11/Jkbose/releases/latest/download/JKBose.Helper.v9.8.apk"
  };

  const url = links[path];

  if (!url) {
    return res.status(404).send("Invalid download path");
  }

  res.writeHead(302, {
    Location: url
  });

  res.end();
}
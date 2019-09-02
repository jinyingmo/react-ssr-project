import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const htmlMarkup = renderToString(<App />);
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">

      </head>

      <body>
        <div id="root">${htmlMarkup}</div>
      </body>
      <script src="/bundle.js" defer></script>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening: http://localhost:${process.env.PORT || 3000}`);
});
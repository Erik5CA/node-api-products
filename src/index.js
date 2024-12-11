import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Server listen in port ${3000}`);
});

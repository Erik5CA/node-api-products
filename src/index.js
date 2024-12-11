import app from "./app.js";
import { conncectToDB } from "./database.js";

conncectToDB();

app.listen(3000, () => {
  console.log(`Server listen in port ${3000}`);
});

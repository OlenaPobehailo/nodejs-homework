const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Olena:p6offVzrvBFjDWzT@cluster0.bd2pbdt.mongodb.net/";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log(
        "Server is running. Database connection successful. Use our API on port: 3000."
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

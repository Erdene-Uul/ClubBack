const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const News = require("./models/News");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const news = JSON.parse(
  fs.readFileSync(__dirname + "/data/news.json", "utf-8")
);

const importData = async () => {
  try {
    await News.create(news);
    console.log("Өгөгдлийг импортолоо...");
  } catch (err) {
    console.log(err.red.inverse);
  }
};

const deleteData = async () => {
  try {
    await News.deleteMany();
    console.log("Өгөгдлийг бүгдийг устгалаа...");
  } catch (err) {
    console.log(err.red.inverse);
  }
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}

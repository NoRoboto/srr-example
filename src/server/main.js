import express from "express";
import path from "path";
import colors from "colors/safe";
import morgan from "morgan";
import helmet from "helmet";

// Create app
const app = express();
console.warn(colors.blue(`Environment: ${ app.get("env") }`));

// Serve files
app.use(express.static(path.resolve(__dirname, "../../dist")));

// Logger
if (app.get("env") === "test" || app.get("env") === "development") {
  app.use(morgan("dev"));
}

// Helmet
app.use(helmet());

// Use Frontend Routes
require("./routes/index.js")(app, "/*");

app.listen(8081);

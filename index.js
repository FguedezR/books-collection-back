const express = require("require");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;
const EXTERNAL_API = "https://api-books-ac3j.onrender.com";

// middleware
// Dependencies
const axios = require('axios');
const cheerio = require('cheerio'); //web scrapper
const mongoose = require('mongoose');
const db = require("../models");

// Mongoose
mongoose.Promise = Promise; 
mongoose.connect("mongodb")
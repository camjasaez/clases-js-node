//Imports
import express from 'express';
import cheerio from 'cheerio';
import axios from 'axios';

//Constanst
const PORT = 3001;

//Servidor
const app = express();

const main = () => {
  try {
    app.listen(PORT, () => console.log('Server on port ', PORT));
  } catch (error) {
    console.log(error);
  }
};

const fetchData = () => {};

//scraper
const scraper = () => {};

main();

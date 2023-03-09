//Imports
import express from 'express';
import * as cheerio from 'cheerio';
import axios from 'axios';

//Constanstes
const PORT = 3001;
const URL =
  'https://simple.ripley.cl/tecno/computacion/notebooks?facet=Marca%3AAPPLE&s=mdco';

//Servidor
const app = express();

//Fetching
const fetchData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//scraper
const scraper = async (URL) => {
  const html = await fetchData(URL);
  const $ = cheerio.load(html);

  let cotizaciones = [];

  $('.catalog-product-details').each(function () {
    //Obteniendo los atributos
    const $name = $(this).find('.catalog-product-details__name').text();
    const $precioNormal = $(this).find('[title="Precio Normal"]').text();
    const $precioInternet = $(this).find('[title="Precio Internet"]').text();
    const $precioRipley = $(this).find('[title="Precio Ripley"]').text();

    const item = {
      name: $name,
      precios: {
        precioNormal: $precioNormal,
        precioInternet: $precioInternet,
        precioRipley: $precioRipley || '',
      },
    };

    cotizaciones.push(item);
  });

  return cotizaciones;
};

/**
 * @name main
 * @description Main aplication
 * @param {String} PORT Main port
 * @param {String} URL Main url
 */
const main = async (PORT, URL) => {
  try {
    // app.listen(PORT, () => console.log('Server on port ', PORT));
    console.log(await scraper(URL));
  } catch (error) {
    console.log(error);
  }
};

main(PORT, URL);

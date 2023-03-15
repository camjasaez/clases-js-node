const https = require('https');

const obtenerDatosDeAPI = () => {
  return new Promise((resolve, reject) => {
    https
      .get('https://jsonplaceholder.typicode.com/posts', (res) => {
        let datos = '';

        res.on('data', (chunk) => {
          datos += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(datos));
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

obtenerDatosDeAPI()
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.error(error);
  });

const get = require('simple-get');

function getRobots(getUrl, timeout) {
  return new Promise((resolve, reject) => {
    get.concat({
      method: 'GET',
      url: getUrl,
      timeout: timeout
    }, (error, response, body) => {
      if (!error) {
        resolve(body.toString());
      } else {
        reject(error);
      }
    });
  });
}

module.exports = getRobots;

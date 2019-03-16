/* eslint-disable global-require,import/no-dynamic-require */


const configSingleton = (() => {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    process.env.NPCONFIG = process.env.NPCONFIG || 'prod';

    const cfType = `.${process.env.NPCONFIG}`;

    const config = require(`./config${cfType}.json`);

    if (process.env.PORT) {
      process.env.PORT = normalizePort(process.env.PORT);
      config.port = process.env.PORT;
    } else {
      config.port = normalizePort(config.port);
      process.env.PORT = config.port;
    }

    return config;
  }

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const config = configSingleton.getInstance();

console.log(config);

module.exports = config;

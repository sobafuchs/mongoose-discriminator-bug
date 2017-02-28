const express = require('express');
const fs = require('fs');
const chalk = require('chalk');
const db = require('./models')(); // create models (mutate schemas)

module.exports = function startServer() {
  const PORT = 3000;

  const app = express();

  app.use('/dist', express.static('dist'));

  app.get('*', (req, res) => {
    res.send(fs.readFileSync('index.html', 'utf-8'));
  });

  app.listen(PORT);

  console.log(chalk.green(`App listening on port ${PORT}`));
}
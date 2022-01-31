/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '..',
    'REACT-LOGIN/cypress/env_files',
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.fileConfig;

  return getConfigurationByFile(file);
};

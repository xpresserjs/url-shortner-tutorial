// Import Xpresser
const {init} = require("xpresser");

/**
 * Get config from config.js
 * See https://xpresserjs.com/configuration/
 */
const config = require("./config");

// Boot Xpresser with config
const $ = init(config)

// Boot Xpresser
$.boot();

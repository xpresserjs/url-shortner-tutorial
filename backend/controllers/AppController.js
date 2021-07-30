/**
 * @typedef {Xpresser.Http} WHttp - Webstorm Http Type
 * @typedef {import("xpresser/types/http").Http} VHttp - Vscode Http Type
 */

const Url = require("../models/url");

module.exports = {
  name: "AppController",

  /**
   * Get Index Page
   * @param {WHttp} http - Http Instance.
   */
  index(http) {
    return http.view("index");
  },

  async shorten(http) {
    const url = http.body("url");

    const newUrl = await Url.new({ url });
    console.log(newUrl);

    return http.redirectBack();
  }
};

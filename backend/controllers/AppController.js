/**
 * @typedef {Xpresser.Http} WHttp - Webstorm Http Type
 * @typedef {import("xpresser/types/http").Http} VHttp - Vscode Http Type
 */
const Url = require("../models/url");

module.exports = {
  name: "AppController",

  /**
   * Get Index Page
   * @param {Xpresser.Http} http
   */
  async index(http) {
    // Get all urls from db.
    const urls = await Url.find();

    // Share urls with index.ejs
    return http.view("index", { urls });
  },

  /**
   * Shorten url.
   * @param  {Xpresser.Http} http
   * @returns {Promise<any>}
   */
  async shorten(http) {
    // Get url from request body.
    const url = http.body("url");
    // Generate short url using xpresser's randomStr helper.
    const shortId = http.$("helpers").randomStr(6);

    try {
      console.log(await Url.new({ url, shortId }));
    } catch (e) {
      console.log(e);
    }

    return http.redirectBack();
  }
};

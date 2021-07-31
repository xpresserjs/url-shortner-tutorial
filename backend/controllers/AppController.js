const Url = require("../models/url");

/**
 * App Controller
 * @type {import("xpresser/types/http").Controller.Object}
 */
module.exports = {
  name: "AppController",

  async index(http) {
    // Get all urls from db.
    const urls = await Url.find();

    // Render index.ejs with urls
    return http.view("index", { urls });
  },

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
  },

  async redirect(http) {
    // Get shortId from request params.
    const { shortId } = http.params;

    // find url using shortId
    const url = await Url.findOne({ shortId });

    // if no url found then send a 404 error message.
    if (!url) return http.status(404).send(`<h3>Short url not found!</h3>`);

    // Increment clicks count.
    await url.updateRaw({
      $inc: { clicks: 1 }
    });

    // redirect to long url
    return http.redirect(url.data.url);
  },

  async delete(http) {
    // Get shortId from request body.
    const shortId = http.body("shortId");

    // Delete from database
    await Url.native().deleteOne({ shortId });

    return http.redirectBack();
  }
};

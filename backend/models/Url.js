const { is } = require("xpress-mongo");
const { DBCollection } = require("@xpresser/xpress-mongo");

/**
 * Url Model Class
 */
class Url extends DBCollection("urls") {
  // Set Model Schema
  static schema = {
    url: is.String().required(),
    shortId: is.String().required(),
    clicks: is.Number().required(),
    createdAt: is.Date().required()
  };
}

module.exports = Url;

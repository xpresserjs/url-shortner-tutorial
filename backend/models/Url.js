const { customAlphabet } = require("nanoid");
const { is } = require("xpress-mongo");
const { DBCollection } = require("@xpresser/xpress-mongo");

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 6);

/**
 * Url Model Class
 */
class Url extends DBCollection("urls") {
  // Set Model Schema
  static schema = {
    url: is.String().required(),
    shortId: is.String(nanoid).required(),
    clicks: is.Number().required(),
    createdAt: is.Date().required()
  };
}

module.exports = Url;

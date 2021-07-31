const { is, XMongoModel } = require("xpress-mongo");
const { UseCollection } = require("@xpresser/xpress-mongo");

class Url extends XMongoModel {
  // Set Model Schema
  static schema = {
    url: is.String().required(),
    shortId: is.String().required(),
    clicks: is.Number().required(),
    createdAt: is.Date().required()
  };
}

// Map Model to Collection.
// .native() will be made available for use.
UseCollection(Url, "urls");

module.exports = Url;

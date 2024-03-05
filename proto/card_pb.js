// source: card.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.Card', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Card = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Card, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Card.displayName = 'proto.Card';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Card.prototype.toObject = function(opt_includeInstance) {
  return proto.Card.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Card} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Card.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cardCvv: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cardExpiry: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cardHolderFullName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cardHolderZipCode: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Card}
 */
proto.Card.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Card;
  return proto.Card.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Card} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Card}
 */
proto.Card.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardCvv(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardExpiry(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardHolderFullName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardHolderZipCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Card.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Card.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Card} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Card.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCardNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCardCvv();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCardExpiry();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCardHolderFullName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCardHolderZipCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Card.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string card_number = 2;
 * @return {string}
 */
proto.Card.prototype.getCardNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setCardNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string card_cvv = 3;
 * @return {string}
 */
proto.Card.prototype.getCardCvv = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setCardCvv = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string card_expiry = 4;
 * @return {string}
 */
proto.Card.prototype.getCardExpiry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setCardExpiry = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string card_holder_full_name = 5;
 * @return {string}
 */
proto.Card.prototype.getCardHolderFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setCardHolderFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string card_holder_zip_code = 6;
 * @return {string}
 */
proto.Card.prototype.getCardHolderZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.Card} returns this
 */
proto.Card.prototype.setCardHolderZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto);
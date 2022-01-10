const requiredBool = { type: Boolean, required: true };
const requiredString = { type: String, required: true };
const requiredNumber = { type: Number, required: true };
const requiredMap = { type: Map, of: String, required: true };

module.exports = { requiredBool, requiredString, requiredNumber, requiredMap };

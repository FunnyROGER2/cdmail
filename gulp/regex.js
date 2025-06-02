// ===============================================
// REGEX
// ===============================================

module.exports = regex = {
	regexMocks: /{{\s*mocks\.(\w+)\s*}}/g,
	regexVars: /{{\s*vars\.(\w+)\s*}}/g,
	regexTemplates: /{{\s*templates\.([a-zA-Z0-9_-]+)\s*}}/g,
};

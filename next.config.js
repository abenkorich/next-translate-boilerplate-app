const nextTranslate = require("next-translate-plugin");

const config = nextTranslate({});

// work around for next-translate-plugin
config.i18n = undefined;

module.exports = config;


const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['2ppMaXZZYJNsNkeGWy4QME'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
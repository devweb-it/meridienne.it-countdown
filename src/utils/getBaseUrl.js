function getBaseUrl(defaultLang, lang) {
  if (defaultLang !== lang) {
    return `/${lang}/`;
  }

<<<<<<< HEAD
  return "/";
=======
  return '/';
>>>>>>> 5916f18 (Initial commit from gatsby: (https://github.com/thundermiracle/gatsby-startbootstrap-agency.git))
}

module.exports = getBaseUrl;

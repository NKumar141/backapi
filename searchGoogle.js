const googleIt = require("google-it");

async function searchGoogle(keyword) {
  const results = await googleIt({ query: keyword });
  const links = results.map((result) => result.link);
  return links;
}

module.exports = searchGoogle;

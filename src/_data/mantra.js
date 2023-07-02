// import the client we just created
const client = require('../../utils').contentfulClient;

module.exports = async () => {
	// create a request for all entries that match our post type. 
	// we can use the `order` property to sort them reverse-chronologically by their published date.
  const mantra = await client.getEntries({ content_type: 'mantra' });
  return mantra.items;
};
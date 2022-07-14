const axios = require('axios');
const cheerio = require('cheerio')

const getEsportudo = async () => {
  const response = await axios.get('https:\/\/esportudo.com')
  const $ = cheerio.load(response.data)
  return response.data

  // const title = $("meta[property='og:title']").attr('content');
  // const image = $("meta[property='og:image']").attr('content');
  // const url = $("meta[property='og:url']").attr('content');
  // const type = $("meta[property='og:type']").attr('content');
  // const description = (
  //   $("meta[property='og:description']") || $("meta[property='description']")
  // ).attr('content');
  // return {
  //   title,
  //   url,
  //   image,
  //   type,
  //   description,
  // };
}

getEsportudo().then(item => console.log(item))

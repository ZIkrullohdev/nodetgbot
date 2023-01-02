const axios = require('axios');

async function tiktok_downloader(tiktok_link) {
  try {
    const options = {
      method: 'GET',
      url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
      params: { url: tiktok_link },   
      headers: {
        'X-RapidAPI-Key': '95c614c695mshbcae13f2cdcc4b9p17f520jsn888d5194ec87',
        'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
      }
    };

    const response = await axios.request(options)
    const tiktokVideoLink = await response.data.video[0]

    return tiktokVideoLink
  } catch (error) {
    console.log(error + "")
  }


}

module.exports = {
  tiktok_downloader
} 
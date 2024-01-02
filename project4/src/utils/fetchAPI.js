import axios from "axios";

export const BASE_URL = "https://huge-porn-scraper.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    // tag: 'upskirt',
    // location: '<REQUIRED>'
    page: "1",
  },
  headers: {
    "X-RapidAPI-Key": "REACT_APP_RAPID_API_KEY",
    "X-RapidAPI-Host": "huge-porn-scraper.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

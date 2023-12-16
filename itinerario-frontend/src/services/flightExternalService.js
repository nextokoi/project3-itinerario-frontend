
import axios from 'axios'

const fetchData = async (origin, destination, depart_date, setFlightList) => {
    const options = {
      method: 'GET',
      url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix',
      params: {
        origin,
        destination,
        flexibility: '0',
        currency: 'EUR',
        depart_date,
        show_to_affiliates: 'true',
        limit: '10',
        distance: '100'
      },
      headers: {
        'X-Access-Token': '33fa6a8ba3230c4b2bfa23dc26e7d69f',
        'X-RapidAPI-Key': 'fb93ba0139msh83c5bd8123832abp105240jsn713ac3d8ed31',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        setFlightList(response.data.prices);
    } catch (error) {
        console.error(error);
    }
}  

export default fetchData
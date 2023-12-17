import axios from 'axios'

const fetchData = async (destination, origin, month, setFlightList) => {
    const options = {
    method: 'GET',
    url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/month-matrix',
    params: {
        destination,
        origin,
        currency: 'EUR',
        month
    },
    headers: {
        'X-Access-Token': import.meta.env.VITE_API_TOKEN,
        'X-RapidAPI-Key': 'fb93ba0139msh83c5bd8123832abp105240jsn713ac3d8ed31',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        setFlightList(response.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default fetchData
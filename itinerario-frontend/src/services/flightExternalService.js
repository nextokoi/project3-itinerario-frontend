import axios from 'axios'

const fetchData = async (origin, destination, month, setFlightList) => {
    const options = {
    method: 'GET',
    url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/month-matrix',
    params: {
        origin,
        destination,
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
        const result = response.data.data
        const getRandomNumberFlight = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const resultData = result.map((flight) => {
            const randomNumberFlight = getRandomNumberFlight(12501, 98979)
            return {
                ...flight,
                id: randomNumberFlight
            }
        })
        console.log(resultData)
        setFlightList(resultData);
    } catch (error) {
        console.error(error);
    }
}

export default fetchData
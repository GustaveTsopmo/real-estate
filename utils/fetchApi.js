import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0b9cc92384mshc2ad7325f67d57bp1d15c5jsn7ef7b479de9b'
        }
    });

    return data;
}
import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6cc3518bdfmsh72a67486d5ea61cp19295bjsn33debab18e68',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data 
}
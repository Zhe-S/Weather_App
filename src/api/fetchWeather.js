import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "383771ccc1a74c07ea5fd859af65a4fe";


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key,
        }
    });

    return data;
}
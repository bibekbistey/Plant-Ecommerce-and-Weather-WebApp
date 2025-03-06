import axios from "axios";

export const handleWeatherApi = async (location) => {
  const response =
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=f119090b94aeff0d7baf1814a762a99c
        `);
  console.log("This is data", response.data);
  return response.data;
};

import axios from "axios";

// Public apikey: 212dbf5bfa695f13238bdf8e94da92db
// Private apikey: a994a27e8a4cebaef3820526b4ce1567b7506d91
// ts=1
// ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// 1a994a27e8a4cebaef3820526b4ce1567b7506d91212dbf5bfa695f13238bdf8e94da92db
// hash = 2c49771beaf98b9400f980fc76ff3853

// URL COMPLETA = https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=

//ts=1&apikey=212dbf5bfa695f13238bdf8e94da92db&hash=2c49771beaf98b9400f980fc76ff3853

const instance = axios.create({
    baseURL : "https://gateway.marvel.com/v1/public",
});

export const getChatacters = async() => {
    const URL = "/characters?ts=1&limit=100&apikey=212dbf5bfa695f13238bdf8e94da92db&hash=2c49771beaf98b9400f980fc76ff3853";
    const response = await instance.get(URL);
    return response.data.data.results;
}
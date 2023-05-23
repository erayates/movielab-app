import axios from 'axios';

const token = import.meta.env.VITE_APP_TMDB_TOKEN;
const baseURL = import.meta.env.VITE_APP_BASE_URL;

const headers = {
    Authorization: `bearer ${token}`,
};

export const fetchData = async (url,params) => {
    try{
        const {data} = await axios.get(baseURL + url, {headers,params});
        return data;
    }catch(err){
        console.log(err);
        return err;
    }

}

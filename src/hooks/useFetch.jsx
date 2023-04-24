import { useEffect,useState } from "react";
import { fetchData } from "../utils/api";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading('Loading...');
        fetchData(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch(err => {
                setLoading(false);
                setError("Something went wrong!");
            })
    },[url])
    return {data,loading,error};
}


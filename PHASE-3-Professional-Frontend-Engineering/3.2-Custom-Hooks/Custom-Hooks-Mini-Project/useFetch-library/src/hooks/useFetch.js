import { useState, useEffect } from "react";

function useFetch (url, options={}){
    const [data, setData] = useState (null);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);
    const [refetchIndex, setRefetchIndex] = useState (0);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading (true);
        setError (null);
         
        fetch(url, {...options, signal: controller.signal})
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((result)=>{
            setData(result);
        })
        .catch((error)=>{
            if(error.name === "AbortError"){
                return;
            }
            setError (error);
        })
        .finally (()=>{
            setLoading (false);
        });
        return ()=>{
            controller.abort();
        };
    }, [url, refetchIndex]);
    const refetch = () =>{
        setRefetchIndex ((prev)=> prev+1);
    };
    return{
        data,
        loading,
        error,
        refetch,
    };
}

export default useFetch;


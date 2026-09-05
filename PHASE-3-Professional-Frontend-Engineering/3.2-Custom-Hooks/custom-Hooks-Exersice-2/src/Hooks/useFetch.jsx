import { useState, useEffect } from "react";

function useFetch () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refetchIndex, setRefetchIndex] = useState(0);

    useEffect (()=>{
        setLoading(true)
        setError(null)

        fetch("https://dummyjson.com/products")
        .then((response)=>{
            if(!response.ok){
                throw new Error ("Something went wrong");
            }
            return response.json();
        })
        .then((result)=>setData(result))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false))
    }, [refetchIndex])

    const refetch = ()=>{
        setRefetchIndex(prev => prev + 1)
    }

    return {
        data,
        loading,
        error,
        refetch
    }
}

export default useFetch
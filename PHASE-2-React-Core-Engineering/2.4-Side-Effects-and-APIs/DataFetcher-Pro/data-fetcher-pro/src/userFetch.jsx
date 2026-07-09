import {useState, useEffect} from 'react'

const url ='https://jsonplaceholder.typicode.com/users/3';

function DataFetch (){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (()=>{
       async function getData() {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error ('مشکل دریافت دیتا!!!');
            }
            const data = await response.json();
            setUser(data);
            setIsLoading(false);
        }catch(error){
            console.log ("خطای شبکه:", error);
            setIsLoading(false);
        }
       } 
       getData(); 
    },[])
    return (
    <>
    <h3>Data Fetcher Pro 2</h3>
    <div>{
        isLoading?
        ("Loading ..."):
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    }</div>
    </>
    )
}
export default DataFetch;
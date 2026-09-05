
import useFetch from "./Hooks/useFetch";

function App() {
  const {data, loading, error, refetch} = useFetch();

  if(loading){
      return <h1>Loading ...</h1>
    }

  if(error){
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={refetch}>Refetch</button>
    </>
  )
}

export default App


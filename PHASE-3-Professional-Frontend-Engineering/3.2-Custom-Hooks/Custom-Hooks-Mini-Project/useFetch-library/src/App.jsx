import { useState } from "react";
import useFetch from "./hooks/useFetch";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

function App() {
  const [url, setUrl] = useState(USERS_URL);

  const { data, loading, error, refetch } = useFetch(url);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        useFetch Hook Library
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setUrl(USERS_URL)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Users
        </button>

        <button
          onClick={() => setUrl(POSTS_URL)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Posts
        </button>

        <button
          onClick={refetch}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Refetch
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {data && (
        <pre className="text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
import { PostList } from "./components/PostList";
import { useState } from "react";

function App(){
  const [isVisible, setIsVisible] = useState (true);
  const toggleVisibility = () => {
    setIsVisible ((prev) => !prev)
  }

  return(
    <>
    <h1>Data Fetching Architecture</h1>
    <button onClick={toggleVisibility}>
      {isVisible ? "پنهان کردن محتوا" : "نمایش محتوا"}
    </button>
    {isVisible && <PostList/>}
    </>
  )
}

export default App;
import './App.css';
import {useState} from 'react';

function App() {
  
  const [likes, setlikes] = useState (0);

  return (
    <>
    <div className="likeCount">{likes}</div>
    <div className="likeBtn" onClick={()=>setlikes(likes+1)}>
      click to add like
    </div>
    <div className="likeBtn" onClick={()=>setlikes(likes-1)}>
      click to remove like
    </div>

    </>
    
  );
}

export default App;
import { useAuth } from "./context/AuthContext";

function App(){
  const {user, login, logout}=useAuth();

  if(!user){
    return(
      <div>
        <h1>اهراز هویت</h1>
        <button onClick={()=>
          login({email:"broxapp@example.com", name:"Brox"}, 
            "fake-jwt-token-123"
          )
        }>ورود</button>
      </div>
    );
  }

  return (
    <div>
      <h1>خوش آمدی</h1>
      <p>اایمیل: {user.email}</p>
      <button onClick={logout}>خروج</button>
    </div>
  );
}
export default App;
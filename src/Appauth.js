import { Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { signInWithGoogle } from "./Firebase";

function refreshPage() {
  if (signInWithGoogle)  {
    window.location.reload();
    // const navigate = useNavigate()
    // navigate("/")
    
  }
}

function repage(){
  return <Navigate to="/"/>
}

function Appauth() {
  return (
    <div className="mainlogin">
    <div className="Appauth">
      <form onSubmit={refreshPage}>
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      </form>

      {/* <button class="login-with-google-btn" onClick={() => {
          signInWithGoogle();
          refreshPage();
        }}>refresh
      </button> */}
      
    <title>login App</title>
    <line1></line1>
    <line2></line2>
    <email>email</email>
    <password>name</password>
    <h2>ItzMine</h2>

    <googleemailcover></googleemailcover>
    <googlenamecover></googlenamecover>
    <a href="main.html" class="button">login</a>
      <googleinname2>{localStorage.getItem("name")}</googleinname2>
      <googleinemail2>{localStorage.getItem("email")}</googleinemail2>
      <div className="imgauth">
      <img src={localStorage.getItem("profilePic")} />
      </div>
      <coverlogin></coverlogin>

    </div>
    </div>
  );
}

export default Appauth;

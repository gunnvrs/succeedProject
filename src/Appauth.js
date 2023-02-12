import "./App.css";
import { signInWithGoogle } from "./Firebase";

function refreshPage() {
  if (signInWithGoogle)  {
    window.location.reload();
  }
}

function Appauth() {
  return (
    <div className="Appauth">
      
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>

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
      <img src={localStorage.getItem("profilePic")} />
      <coverlogin></coverlogin>

    </div>
  );
}

export default Appauth;

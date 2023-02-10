import "./App.css";
import { signInWithGoogle } from "./Firebase";

function Appauth() {
  return (
    <div className="Appauth">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <googleinname2>{localStorage.getItem("name")}</googleinname2>
      <googleinemail2>{localStorage.getItem("email")}</googleinemail2>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  );
}

export default Appauth;

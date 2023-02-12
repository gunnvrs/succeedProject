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

      <googleinname2>{localStorage.getItem("name")}</googleinname2>
      <googleinemail2>{localStorage.getItem("email")}</googleinemail2>
      <img src={localStorage.getItem("profilePic")} />
      <coverlogin></coverlogin>

    </div>
  );
}

export default Appauth;

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="_main">
      <div class="container">
        <div class="content">
          <h1>An inspiring design delivered to your inbox every morning</h1>
          <p id="long-text">
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>

          <p id="short-text">Show me how it looks</p>

          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email Address"
            />
            <button type="submit">Register Now</button>
          </form>

          <p id="bottom-text">Free - No Spam - No Data Sharing</p>
        </div>
        <div class="sideImage">
          <img src="man.svg" alt="side image" />
        </div>
      </div>
      <div class="footer">
        <div class="footer_wrapper">
          <div class="left">
            <p>Promt Generator</p>
            <p>dweep daily</p>
            <p>All Contributions</p>
            <p>Your Data on Dweep.io</p>
            <p>Contribute to Dweep</p>
          </div>
          <div class="right">
            <p>Promt Generator</p>
            <p>dweep daily</p>

            <div class="social_media">
              <img src="LinkedinLogo.svg" alt="linkdin icon" />
              <img src="InstagramLogo.svg" alt="instagram icon" />
            </div>
            <p>Hello@Dweep.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

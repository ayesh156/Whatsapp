import logo from './logo.svg';
import './App.css';
import ReactWhatsapp from "react-whatsapp";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <ReactWhatsapp number="+94 783233760" message="Hi." style={{backgroundColor:"#25D366", padding:"10px"}}>Whatsapp Inquiry</ReactWhatsapp>

    </div>
  );
}

export default App;

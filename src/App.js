//import logo from "./logo.svg";
import "./App.css";
import Loader from "react-loader-spinner";

import SearchCity from "./SearchCity";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <SearchCity />
      </header>
    </div>
  );
}

export default App;

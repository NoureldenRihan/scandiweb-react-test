import "./App.css";
import MainStore from "./components/MainStore/MainStore";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <MainStore />
    </div>
  );
}

export default App;

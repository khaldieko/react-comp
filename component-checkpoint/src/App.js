import logo from "./logo.svg";
import "./App.css";
import DisplayPicture from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/Fullname";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="jjsx">
        <DisplayPicture />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  //--------------array-------------//

  // let arr = [1, 2, 3, 4, 5];

  //copy arr

  // let arr1 = [...arr];
  // console.log(arr1);

  //merging

  // let arr2 = [12, 23];
  // let ans = [...arr, ...arr2];
  // console.log(ans);

  //dstructuring

  // const [fist, second, third, xyz, fifth] = arr;
  // console.log(second);

  //------------object-------------------//

  // let obj = { id: 101, name: "amit" };

  //copy object

  // let obj1 = { ...obj };
  // console.log(obj1);

  //merge object

  // let obj2 = { id: 102, place: "surat" };
  // let ans2 = { ...obj, ...obj2 };
  // console.log(ans2);

  //destructoring

  // let { id, name } = obj;
  //   console.log(name, obj, id);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

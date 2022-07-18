import logo from "./logo.svg";
import "./App.css";

function App() 
  // let Data = [
  //   {
  //     id: 101,
  //     name: "Abacavir",
  //     quantity: 25,
  //     price: 150,
  //     expiry: 2022,
  //     status: true,
  //   },
  //   {
  //     id: 102,
  //     name: "Eltrombopag",
  //     quantity: 90,
  //     price: 550,
  //     expiry: 2021,
  //     status: true,
  //   },
  //   {
  //     id: 103,
  //     name: "Meloxicam",
  //     quantity: 85,
  //     price: 450,
  //     expiry: 2025,
  //     status: false,
  //   },
  //   {
  //     id: 104,
  //     name: "Allopurinol",
  //     quantity: 50,
  //     price: 600,
  //     expiry: 2023,
  //     status: true,
  //   },
  //   {
  //     id: 105,
  //     name: "Phenytoin",
  //     quantity: 63,
  //     price: 250,
  //     expiry: 2021,
  //     status: false,
  //   },
  // ];

  // return (
  //   <div>
  //     {Data.map((v, i) => {
  //       return (
  //         <div key={i}>
  //           <h1>{v.name}</h1>
  //           <h3>{v.price}</h3>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  //filter

  // let fData = Data.filter((v, i) => v.expiry >= 2022);
  // console.log(fData);

  //reduce

  // let totalprice = fData.reduce((acc, v, i) => acc + v.price, 0 );
  // console.log(totalprice);

  function app1() {
   let data1 = [
     
    {
      grid: 123,
      name: 'Amit',
      fees: 50000,
      attendance: 80
    },
    {
      grid: 456,
      name: 'Ajay',
      fees: 70000,
      attendance: 90
    },
    {
      grid: 856,
      name: 'Ashish',
      fees: 30000,
      attendance: 65
    } ,

    {
      grid: 762,
      name: 'Raj',
      fees: 90000,
      attendance: 70
    },
  

   ]


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

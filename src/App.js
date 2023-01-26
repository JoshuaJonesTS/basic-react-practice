import './App.css';
import Header from './blocks/Header/header.block';

function App() {
  return (
    <div className="App">
     <Header title={"First Title"} borderColor={"red"}></Header>
     <Header title={"Second Title"} borderColor={"orange"}></Header>
     <Header title={"Third Title"} borderColor={"yellow"}></Header>
     <Header title={"Fourth Title"} borderColor={"green"}></Header>
     <br></br>
    </div>
  );
}

export default App;

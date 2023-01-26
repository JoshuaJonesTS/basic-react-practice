import './App.css';
// blocks
import Header from './blocks/Header/header.block';
import Square from './blocks/Square/square.block';

// data
import imageObj from './Photos/data';

function App() {
  return (
    <div className="App">
     <Header title={"First Title"} borderColor={"red"}></Header>
     <Header title={"Second Title"} borderColor={"orange"}></Header>
     <Header title={"Third Title"} borderColor={"yellow"}></Header>
     <Header title={"Fourth Title"} borderColor={"green"}></Header>
     <br></br>
     <div style={{
      display: "flex",
      flex: "flex-wrap",
      justifyContent: "space-evenly"
     }}>
      {/* map through image object to display images, index is by default initialized as an integer */}
      {
        imageObj.map((imageT, index) => {
          let color = "yellow"
          if(index % 2 === 0) {
            color = 'green'
          }
          return (
            <Square picture={imageT.photo} number={index} color={color}/>
          );
        })
      }
     </div>
    </div>
  );
}

export default App;

import './App.css';
// blocks
import Header from './blocks/Header/header.block';
import Square from './blocks/Square/square.block';

// images
import image from '../src/images/image-1.jpg'
import image2 from '../src/images/image-2.jpg'
import image3 from '../src/images/image-3.jpg'
import image4 from '../src/images/image-4.jpg'

function App() {
  // this object holds the string directories of the images
  const imageObj = [
    {
      photo: image
    },
    {
      photo: image2
    },
    {
      photo: image3
    },
    {
      photo: image4
    }
  ];
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
          return (
            <Square picture={imageT.photo} number={index} color={"green"}/>
          );
        })
      }
     </div>
    </div>
  );
}

export default App;

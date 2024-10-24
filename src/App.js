
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'


// let name = " Shailendra Kumar Pandey"
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About"/>
      <div className="container my-3" >
      <TextForm heading = "Enter the text Analyze" />
      </div>
    </>  
  );
}

export default App;

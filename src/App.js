import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import Homepage from './components/homepage/HomePage';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Homepage />
    </div>
  );
}

export default App;

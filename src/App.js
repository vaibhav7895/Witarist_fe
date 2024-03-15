import { Link } from 'react-router-dom';
import './App.css'; 
import Mainroutes from './Component/Mainroutes';


function App() {
  return (
    <div className="App">
      <div className="flex justify-end">
        <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">Home</Link>
      </div>
      <Mainroutes />
    </div>
  );
}

export default App;

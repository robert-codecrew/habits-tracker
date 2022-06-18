
import './App.css';
import Mount from './components/Mount';
import axios from 'axios';
function App() {

  const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'
  const getHabits = async () => {
    let res = await axios.get(`${url}/allhabits`)

    return res.data;

  }
  getHabits()
      // this is my main component 
  return (
    <div className="App">
      <header className="App-header">
       <Mount />
      </header>
    </div>
  );
}

export default App;

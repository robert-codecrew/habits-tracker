
import './App.css';

function App() {

  const url = process.env.REACT_APP_SERVER_URL || `http://localhost:3001/allhabits`
  const getHabits = async () => {
    let res = await axios.get(url)

    return res.data

  }
  getHabits()

  return (
    <div className="App">
      <header className="App-header">
        Habitual
      </header>
    </div>
  );
}

export default App;

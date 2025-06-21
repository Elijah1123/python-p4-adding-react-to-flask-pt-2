import logo from './logo.svg';
import './App.css';
import { use } from 'react';

function App() {
  useEffect(() => {
    fetch("/movies")
     .then((r) => r.json())
     .thev((movies) => console.log(movies));
    
  }, []);

  return <h1>Check the console for a list of movies</h1>;

}

export default App;

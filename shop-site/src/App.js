
import './App.css';
import State from './componets/Footer/State';
import Work from './componets/Footer/Work';
import Header from './componets/Header/Header';
import Shop from './componets/Shop';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Shop></Shop>
   <Work></Work>
   <State></State>
    </div>
  );
}

export default App;

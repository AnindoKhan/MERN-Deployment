import './App.css';
import Home from './views/Home';
import AddPet from './views/AddPet';
import ViewPet from './views/ViewPet';
import EditPet from './views/EditPet';
import {Router}from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/"/>
      <AddPet path="/pets/new"/>
      <ViewPet path="/pets/:id/"/>
      <EditPet path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

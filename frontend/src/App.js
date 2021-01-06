import logo from './logo.svg';

import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <header className="h1 bg-danger text-light">
        Pizza Place
        <i className="fas fa-pizza-slice ml-2" style={{ fontSize: '36px' }}></i>
      </header>

      <Home />
    </div>
  );
}

export default App;

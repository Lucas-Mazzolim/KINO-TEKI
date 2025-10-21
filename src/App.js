import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

// Acrescentar Roteamento entre páginas aqui
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

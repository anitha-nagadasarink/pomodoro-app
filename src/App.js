
import './App.css';
import Header from './components/Header';
import Timer from "./components/Timer";
// import Buttons from "./components/Buttons";
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <Timer />
      {
        //   <Buttons />
        // 
      }
      <Footer />
    </main>
  );
}

export default App;

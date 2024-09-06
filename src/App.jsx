import { NavBar } from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer'
import {Cronometro} from './components/Cronometro/cronometro'
import { Main } from './components/Main/Main';

import './styles/App.css';

function App() {
  return (
    <>
      <NavBar />
      <Cronometro/>
      {/* <Main/> */}
      <Footer/>
    </>
  );
}

export default App;
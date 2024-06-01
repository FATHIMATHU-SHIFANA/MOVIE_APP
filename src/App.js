import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbars from './COMPONENTS/Navbar';
import './COMPONENTS/Navbars.css'
import Movies from './COMPONENTS/Movies';
import { comedyMovies, latestMovies, popularMovies } from './COMPONENTS/Url';
import Detailpage from './COMPONENTS/Detailpage';
import { createContext, useState } from 'react';
import Banner from './COMPONENTS/Banner';
import './COMPONENTS/Movies.css'
import './COMPONENTS/Detailpage.css'



const context = createContext()
function App() {
  const [sample, setsample] = useState([])
  const [test, settest] = useState([])
  const [hide, sethide] = useState(true)
  const [show, setshow] = useState(true)
  const [searchinp, setsearchinp] = useState([])
  const [searchhide, setsearchhide] = useState(true)

  return (
    <div>
      <context.Provider value={{ sample, setsample, test, settest, hide, sethide, searchinp, setsearchinp, show, setshow, searchhide, setsearchhide }}>
        <BrowserRouter>
          {hide === true ? <Navbars /> : ""}
          {show === true ? <Banner /> : ""}
          <Routes>
            <Route path="/popular" element={<Movies pop={popularMovies} />} />
            <Route path="/latest" element={<Movies pop={latestMovies} />} />
            <Route path="/comedy" element={<Movies pop={comedyMovies} />} />
            <Route path='/detailpage' element={<Detailpage/>} />
          </Routes>
        </BrowserRouter>
      </context.Provider>

    </div>
  );
}

export default App;
export { context }

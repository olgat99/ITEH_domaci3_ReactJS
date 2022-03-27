import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameDetails from './GameDetails';
import Home from './Home';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game/:id" element={<GameDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

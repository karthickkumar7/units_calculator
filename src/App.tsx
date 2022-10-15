import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Board from './pages/Board';
import Home from './pages/Home';
import Temperature from './components/Temperature';
import Volume from './components/Volume';
import Length from './components/Length';
import Area from './components/Area';
import Calculator from './components/Calculator';
import Time from './components/Time';
import Test from './components/Test';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Board />}>
                    <Route index element={<Home />} />
                    <Route path="temperature" element={<Temperature />} />
                    <Route path="volume" element={<Volume />} />
                    <Route path="length" element={<Length />} />
                    <Route path="area" element={<Area />} />
                    <Route path="calculator" element={<Calculator />} />
                    <Route path="time" element={<Time />} />
                    <Route path="test" element={<Test />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Archive from './Pages/Archive'
import Main from './Pages/Main'
import DPS from './Pages/Dps'

function Routing(){
    return(
        <div className='App'>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/dps" element={<DPS/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
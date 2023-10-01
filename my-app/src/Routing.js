import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Archive from './Pages/Archive'
import Main from './Pages/Main'

function Routing(){
    return(
        <div className='App'>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/archive" element={<Archive />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
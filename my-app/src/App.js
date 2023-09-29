import './style.css';
import * as React from 'react';
import HelloWorld from './helloWorld';
import HelloReact from './helloReact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/helloReact" element={<HelloReact />} />
        </Routes>
      </Router>
    </>
        // <>
        //     <Routes>
        //         <Route path='/helloWorld' component={HelloWorld} />
        //         <Route exact path='/helloReact' component={HelloReact} />
        //     </Routes>
        // </>
    )
}

export default App;

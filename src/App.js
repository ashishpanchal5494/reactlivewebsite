import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route} from 'react-router'
import './App.css'
import Homepage from './Homepage'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/service' Component={Service} />
        
      </Routes>
    </div>
    )
}

export default App

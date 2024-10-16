import {Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import {Home, About, Projects, Contact} from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </Router>
    </main>
  )
}

export default App
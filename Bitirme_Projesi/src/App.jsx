import Layout from './layout/Layout'
import Home from './pages/Home'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import AddPackage from './pages/AddPackage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='ilanpaketi' element={<AddPackage />} />
        </Route>
      </Routes>



    </>
  )
}

export default App

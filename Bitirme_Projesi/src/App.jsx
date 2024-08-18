import Layout from './layout/Layout'
import Home from './pages/Home'
import SearchSection from './components/SearchSection'
import { Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>



    </>
  )
}

export default App

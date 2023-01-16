
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormSearch from './components/FormSearch'
import MainComponent from './components/MainComponent'
import Movies from './components/Movies'
import SingleMovie from './components/SingleMovie'
import { DataProvider } from './context/DataContext'

function App() {
  

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <MainComponent /> } />
            <Route path='/movies/:id' element={ <SingleMovie /> } />

          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  )
}

export default App

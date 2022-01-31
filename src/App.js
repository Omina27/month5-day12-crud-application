import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AddUsers from './pages/AddUsers';
import Edit from './pages/Edit'


function App() {
  return (
    
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/addusers' element={<AddUsers/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    
    </div>
   
  )
}

export default App;

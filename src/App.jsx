import ListEmployeeComponent from "./components/ListEmployeeComponent"
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  

  return (
    <div className="container-fluid">
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
    <Route path="/" element = {<ListEmployeeComponent/>}/>
    <Route path="/employees" element = {<ListEmployeeComponent/>}/>
    <Route path="/add-employee" element = {<EmployeeComponent/>}/>
    <Route path="/edit-employee/:id" element = {<EmployeeComponent/>}/>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </div>
  )
}

export default App

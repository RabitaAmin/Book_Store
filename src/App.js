import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Axios from './components/axios';
import Signup from './pages/signUp';
import Login from './pages/login';
import Update from './components/update';
import PrivateRoute from './utils/PrivateRoute';
import DebounceDemo from './components/debounce';
import Form from './components/formnew';
function App() {
  return (
    <div>
      <div>
        <h3>Update Using Id</h3>
        <Axios />
      </div>
      <div>
        <h3>Update Using Id</h3>
        <Update />
      </div>
      <div>
        <h3>Debounce</h3>
        <DebounceDemo />
      </div>
      <div>
        <h3>Debounce</h3>
        <Form />
      </div>

    </div>
  );
}

export default App;
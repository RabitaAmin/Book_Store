import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Axios from './components/axios';
import Signup from './pages/signUp';
import Login from './pages/login';
// import Update from './components/update';
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <div>
      <h1>React</h1>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Axios />} path="/" exact />
            {/* <Route element={<Update />} path="/update" exact /> */}
          </Route>
          <Route element={<Signup />} path="/signup" exact />
          <Route element={<Login />} path="/login" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

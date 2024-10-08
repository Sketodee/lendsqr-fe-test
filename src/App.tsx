import '../src/styles/main.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UserDetails from './components/UserDetails';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route element={<Layout />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:id' element={<UserDetails/>}/>
      </Route>
    </Routes>
  );
}

export default App;

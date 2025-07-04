import './App.css';
import Layout from './pages/Layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;

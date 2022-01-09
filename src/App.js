import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePages from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NorFoundPage';
import Users from './pages/users';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';

import NavBar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    
    <NavBar></NavBar>

      <Routes>
        <Route path="/" element={ <HomePages></HomePages>}> </Route>
        <Route path="/users" element={ <Users></Users>}> </Route>
        <Route path="/users/:id" element={ <UserPage></UserPage>}> </Route>

        <Route path="/usuarios/" element={ <Navigate to={'/users'} />  }> </Route>
        {/* <Route path="/usuarios/" element={ <Navigate replace to={'/users'} />  }> </Route> */}

        <Route path="/about" element={ <AboutPage></AboutPage>}> </Route>
        <Route path="/about" element={ <AboutPage></AboutPage>}> </Route>

        <Route path="/dashboard/*" element={ <Dashboard></Dashboard>}> 
            <Route path="bienvenido" element={ <p>Bienvenido!!</p>} ></Route>
            <Route path="goodbye" element={ <p>Goodbye!!</p>} ></Route>
        </Route>

        <Route path="*" element={ <NotFoundPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import {React} from 'react';
import {useNavigate, Outlet , Link, Routes, Route} from 'react-router-dom'

function Dashboard() {
  
  const navigate = useNavigate();


  const handleClick = () =>{
    console.log('handleClick');
      navigate('/')
  };

  return (
      <div>
          <h1>Dashboard</h1>
          <button onClick={handleClick}>
            Logout
          </button>
          <br />
    
          <Link to="bienvenido">
            Say welcome
          </Link>
            <br />
          <Link to="goodbye">
            Doodbye
          </Link>

          <Outlet/>
          {/* <Routes>
            <Route path="bienvenido" element={ <p>Bienvenido!!</p>} ></Route>
          </Routes> */}

      </div>

  );
}

export default Dashboard;

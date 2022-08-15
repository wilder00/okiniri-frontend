import {  Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login.page';






const AuthRouteContent = ()=>{
  return (
    <div>
        <Routes>
          <Route path="/"
            element={
              <h1>Auth</h1>
            }
          />
          <Route path="/login"
            element={
              <LoginPage/>
            }
          />
          <Route path={'proyecto-1'}
            element={
              <h1>Proyecto 1</h1>
            }
          />
          
          <Route path="/proyecto-2"
            element={
              <h1>Proyecto 2</h1>
            }
          />
          
          <Route path="/:proyecto_id"
            element={
              <div></div>
            }
          />
        </Routes>
      </div>
  );
}

export default AuthRouteContent
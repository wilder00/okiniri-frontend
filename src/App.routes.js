import {  Routes, Route } from 'react-router-dom'
import { AuthPages } from './modules/auth/auth.module';






const AppRouteContent = ()=>{
  return (
    <div>
        <Routes>
          <Route path="/"
            element={
              <div>Hola</div>
            }
          />
          <Route path="/auth/*"
            element={
              <AuthPages/>
            }
          />
        </Routes>
      </div>
  );
}

export default AppRouteContent
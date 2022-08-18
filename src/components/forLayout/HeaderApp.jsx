import { NavLink } from 'react-router-dom'

const HeaderApp = ()=>{
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/auth/login"> Login </NavLink>
          </li>
          <li>asdf</li>
          <li>asdf</li>
        </ul>
      </div>
    </nav>
  )
}

export default HeaderApp
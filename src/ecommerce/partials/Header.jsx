import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>Ecommerce</h1>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
            <NavLink to="/cart">Cart <span>0</span></NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header

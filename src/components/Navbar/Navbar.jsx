import { useEffect, useState } from "react"

import { NavLink, useLocation } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"

import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <nav id='navbar'>
        <h2>
          <NavLink
            to="/"
            activeClassName="active"
            exact>
              Top Rated
          </NavLink>
        </h2>

        <h2>
          <NavLink
            to="/popular"
            activeClassName="active"> 
              Popular
          </NavLink>
        </h2>

        <h2>
          <NavLink to="/trending"> Trending </NavLink>
        </h2>

        <h2>
          <NavLink to="/in-theaters"> In-Theaters </NavLink>
        </h2>
      </nav>

      <form>
        <input type="text" placeholder="Search movies..." />
        <button type="submit"> <BiSearchAlt2 /> </button>
      </form>
    </header>
  )
}

export default Navbar
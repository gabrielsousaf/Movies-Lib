import { useEffect, useState } from "react"

import { NavLink, useLocation } from "react-router-dom"
import { BiSearchAlt2, BiAlignJustify } from "react-icons/bi"

import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  useEffect(() => {
    const handleScrollToClose = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    }

    window.addEventListener('scroll', handleScrollToClose);

    return () => {
      window.removeEventListener('scroll', handleScrollToClose);
    }
  }, [showMenu]);
  

  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <button className="hamburguer" onClick={handleMenuToggle}>
        <BiAlignJustify className={`hamburguer-line ${showMenu ? 'active' : ''}`} />
      </button>
      
      <nav id='navbar' className={showMenu ? 'show' : ''}>
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
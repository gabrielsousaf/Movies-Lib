import { useEffect, useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"
import { BiAlignJustify } from "react-icons/bi"

import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [search, setSearch] = useState("")

  const navigate = useNavigate();

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

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true});
    setSearch("");
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
            Home
          </NavLink>
        </h2>

        <h2>
          <NavLink
            to="/top-rated"
            activeClassName="active">
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}   
        />
      </form>
    </header>
  )
}

export default Navbar
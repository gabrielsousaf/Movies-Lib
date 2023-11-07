import { Header, HeaderButton, Nav, Form} from './Navbar.style'
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { BiAlignJustify } from "react-icons/bi"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();


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

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true});
    setSearch("");
  }


  return (
    <Header>
      <HeaderButton className={`hamburguer ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
        <BiAlignJustify className="hamburguer-line" />
      </HeaderButton>

      <Nav id='navbar' className={showMenu ? 'show' : ''}>
        <h2>
          <NavLink
            to="/"
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Home
          </NavLink>
        </h2>
        <h2>
          <NavLink 
            to="/top-rated"
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Top Rated
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/popular"
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Popular
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/trending"
            activeClassName="active"
            onClick={handleMenuItemClick}>
            Trending
          </NavLink>
        </h2>
        <h2>
          <NavLink 
            to="/in-theaters"
            activeClassName="active"
            onClick={handleMenuItemClick}>
            IN-THEATERS
          </NavLink>
        </h2>
      </Nav>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search Series...'
          onChange={(e) => setSearch(e.target.value)}
          value={search} 
        />
      </Form>
    </Header>
  )
}

export default Navbar
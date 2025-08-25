import { Header, HeaderButton, Nav, Form} from './Navbar.style'
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { navLinks } from "../../constants/navLinks"
import { BiAlignJustify } from "react-icons/bi"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);


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
      <HeaderButton
        className={`hamburguer ${showMenu ? 'active' : ''}`}
        onClick={handleMenuToggle}
        aria-label={showMenu ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={showMenu}
        aria-controls="navbar"
      >
        <BiAlignJustify className="hamburguer-line" />
      </HeaderButton>

      <Nav id='navbar' className={showMenu ? 'show' : ''} role="navigation" aria-label="Navegação principal">
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={handleMenuItemClick}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
      <Form onSubmit={handleSubmit} role="search" aria-label="Pesquisar séries">
        <input
          type='text'
          placeholder='Pesquisar séries...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          aria-label='Campo de pesquisa'
        />
        <button type="submit" aria-label="Buscar">
          <FiSearch size={18} />
        </button>
      </Form>
    </Header>
  )
}

export default Navbar
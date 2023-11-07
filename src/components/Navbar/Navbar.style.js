import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #141414bf;
  padding: 15px 2%;
  z-index: 1000;



  & .hamburguer-line{
    width: 100%;
    font-size: 24px;
    height: 20px;
    color: #fff;
    margin: 6px 0;
    transition: all 0.3s ease;
  }
`

export const HeaderButton = styled.button`
  display: none;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media (max-width: 1024px) {
    display: block; 
  }

  & .hamburguer-line{
    width: 100%;
    font-size: 24px;
    height: 20px;
    color: #fff;
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  &.active{
    @media (max-width: 1024px) {
      display: block; 
    }
  }
`

export const Nav = styled.nav`
  display:flex;
    
  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #141414;
    padding: 1rem;
    position: absolute;
    top: -700px;
    left: 0;
    right: 0;
    transition: all .40s ease;
  }

  &.show{
    @media(max-width: 1024px) {
      top: 100%;
    }
  }

  & h2 a{
    font-family: 'Open Sans', sans-serif;
    margin: 10px;
    font-size:1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 1px 15px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 300ms all ease;
    color: #fff;

    &:hover{
      border-bottom: 5px solid #5a1899;
    }

    &.active{
      border-bottom: 5px solid #5A1899 ;
    }

    @media(max-width: 1024px){
      padding:5px 20px;
    }
    
  }
`



export const Form = styled.form`
  display: flex;
  gap: 0.5rem;

  & input{
    padding: 0.6rem 3rem;
    border: none;
    background-color: #3b3b3b;
    box-shadow: #0000001f 0 1px 3px, #0000003d 0 1px 2px;
    opacity: .75;
    font-size: 1.125rem;
    border-radius: 1rem;
    color: #f0f8ff;
    text-align: center;
    transition: .3s all ease;

    &:hover{
      box-shadow: none;
      border:5px solid #5A1899;
    }
  }

`
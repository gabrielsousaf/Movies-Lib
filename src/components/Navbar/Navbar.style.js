import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f0f0fcc;
  backdrop-filter: saturate(150%) blur(12px);
  -webkit-backdrop-filter: saturate(150%) blur(12px);
  padding: 15px 2%;
  z-index: 1000;
  border-bottom: 1px solid #ffffff1a;
  box-shadow: 0 8px 24px rgba(0,0,0,0.24);



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
  padding: 6px;
  border-radius: 10px;
  transition: background-color .2s ease, transform .2s ease;

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

  &:hover{
    background-color: #ffffff1a;
    box-shadow: 0 6px 14px rgba(0,0,0,.25);
  }

  &:active{
    transform: scale(0.98);
  }

  &:hover .hamburguer-line{
    color: #efe7ff;
  }

  &.active{
    @media (max-width: 1024px) {
      display: block; 
    }
  }
`

export const Nav = styled.nav`
  display:flex;
  align-items: center;
  gap: 0.25rem;
    
  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #121212f2;
    backdrop-filter: blur(8px);
    padding: 0.75rem 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    border-bottom: 1px solid #ffffff14;
    transition: transform .3s ease, opacity .3s ease;
  }

  &.show{
    @media(max-width: 1024px) {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  }

  & ul{
    display:flex;
    align-items:center;
    gap: .25rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media(max-width: 1024px){
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: .5rem;
    }
  }

  & li a{
    font-family: 'Poppins', 'Open Sans', sans-serif;
    margin: 10px;
    font-size:1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 6px 14px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    transition: color .2s ease, background .2s ease, border-color .2s ease, transform .2s ease;
    color: #fff;

    &:hover{
      background: #ffffff10;
      transform: translateY(-1px);
    }

    @media(max-width: 1024px){
      padding:5px 20px;
    }
    
    &::after{
      content: '';
      position: absolute;
      left: 14px;
      right: 14px;
      bottom: 4px;
      height: 0px;
      border-radius: 999px;
      background: linear-gradient(90deg, #7b2cbf, #9d4edd);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .25s ease;
    }

    &:hover::after{
      transform: scaleX(1);
      height: 3px;
    }

    &.active::after{
      transform: scaleX(1);
      height: 3px;
    }
  }
`



export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & input{
    padding: 0.6rem 1rem 0.6rem 3rem;
    border: none;
    background-color: #3b3b3b;
    box-shadow: #0000001f 0 1px 3px, #0000003d 0 1px 2px;
    opacity: .75;
    font-size: 1.125rem;
    border-radius: 1rem;
    color: #f0f8ff;
    text-align: left;
    transition: .3s all ease;

    &:hover{
      box-shadow: none;
      border:5px solid #5A1899;
    }

    &::placeholder{
      color: #c9c9c9;
      opacity: .8;
    }

    &:focus{
      outline: none;
      opacity: 1;
      box-shadow: 0 0 0 3px #5A189955;
    }
  }

  & button{
    position: relative;
    margin-left: -3rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #5A1899, #9d4edd);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;

    &:hover{
      filter: brightness(1.1);
      box-shadow: 0 8px 16px rgba(93, 24, 153, .35);
    }

    &:active{
      transform: scale(0.98);
    }
  }
`
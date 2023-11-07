import styled from "styled-components";

export const Main = styled.main`
  padding-top:8rem;

  @media(max-width:767px){
    margin: 1rem;
  }
  
`

export const Container = styled.div`
  margin: 1.5rem;

  @media(max-width:767px){
    margin: 0;
  }

`

export const TextButton = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px){
    margin-bottom: 1rem;
  }
`

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.5rem;
  color:#fff;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.span`
  background-color: #3b3b3b;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  cursor:pointer;
  transition: 0.3s all ease;

  &:hover{
    background-color: #5a189a;
  }
`

export const Image = styled.div`
  text-align: center;
  padding: 0.5rem; 
  margin-bottom:3rem;

  & .series-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 1rem;
    position:relative;

    @media (max-width: 767px) {
      margin: 0rem;
    } 
  }

  & a{
    justify-content: center;
    text-align: center;
  }
  
  & img{
    width: 100%;
    border-radius: 1rem;
    transition: 300ms all ease;

    &:hover{
      border: 5px solid #5A189A;
    }
  }


  & .DateProgress{
    width: 100%;
    top: 1rem;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

  & .progressbar{
    margin-right: 10px;
    background-color: #313131;
    border-radius:100%;
  }

  & p{
    margin-left: 10px;
    color: white;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    display:flex;
    align-items: center;
    background-color: #313131;
  }


  & h2{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    font-family: 'Source Sans 3', sans-serif;
  }

`
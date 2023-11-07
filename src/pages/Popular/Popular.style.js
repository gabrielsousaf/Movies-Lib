import styled from "styled-components";

export const Main = styled.main`
  padding-top:8rem;
`

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size:4rem;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;

  @media(max-width:767px) {
    font-size: 2.5rem;
  }
`

export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media(max-width: 1024px){
    justify-content:center;
  }

  & .series-card{
    width: 22%;
    color: #fff;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    align-items: center;
    align-items: stretch;
    border-radius:1rem;
    background-color: #313131;
    margin: 1rem;
    position: relative;

    @media(max-width: 1024px){
      width:40%;
      justify-content:center;
      display: flex;
      text-align: center;
      margin-bottom: 2rem;
    }

    @media(max-width: 768px){
      width:100%;
      margin: 0rem;
      margin-top: 2rem;
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
    margin: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    font-family: 'Source Sans 3', sans-serif;
  }


`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Source Sans 3', sans-serif;
  padding-top: 2rem;
  padding-bottom: 2rem;

  & .page{
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: #3B3B3B;
    text-align: center;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 16px;
    transition: 300ms all ease;

    &:hover{
      background-color: #5A1899;
    }
  }

  & p{
    font-weight: 400;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.3rem;
  }

  & .not-page{
    color: rgb(138, 138, 138)
  }
`
import styled from "styled-components";

export const Main = styled.main`
  & .movie-card{
    position:relative;
  }

  & .poster{
    position: absolute;
    width: 100%;
    height: auto;
    left: 50%;
    top: 0;
    z-index: -1;
    overflow: hidden;
    transform: translate(-50%);
  }

  & .poster img{
    position: relative;
    width: 100%;
    height: 10%;
    object-fit: cover;
    border-radius: 20px;
  }

  & .card-info{
    position: relative;
    display: flex;
    justify-content: center;
    padding:0px 3rem;
  }

  & .card-info .container-serie{
    margin-top: 300px;
    position: relative;
    z-index: 2;
    padding: 1rem;
    background-color: #3b3b3b;
    display: flex;
    border-radius: 16px;

    @media(max-width:1024px) {
      display: block;
    }

    @media(max-width:767px) {
      margin-top:100px;
    }
  }

  & .card-info .container-serie .serie-poster{
    display:flex;
    justify-content: center;
  }

  & .card-info .container-serie img{
    width: 300px;
    border-radius: 16px;
  }
  & .card-info .container-serie a{
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }


  & .card-info .container-serie .content-info{
    padding-top: 1rem;
    padding-left: 2rem;

    @media(max-width:1024px) {
      padding-left: 0rem;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
    }
  }

  & .card-info .container-serie .content-info .title h2{
    text-transform: uppercase;
    font-family: Source-Sans-Pro, sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: #fff;
    display: flex;
    align-items: center;
    text-align:center;

    @media(max-width:1024px) {
      font-size: 1.8rem;
    }
  }

  & .card-info .container-serie .content-info .title h2 span{ 
    margin-left: 9px;
    opacity: 0.8;
  }




  & .card-info .container-serie .content-info .info {
    @media(max-width:1024px) {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
    }
  }

  & .card-info .container-serie .content-info .info ul{
    display:flex;
    align-items: center;
    margin-top: 1rem;
  }

  & .card-info .container-serie .content-info .info ul li{
    margin-right: 1.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items:center;
    font-family: 'Roboto', sans-serif;
  }

  & .card-info .container-serie .content-info .info ul li svg {
    margin-right: 0.5rem;
  }

  & hr{
    width:100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & .card-info .container-serie .content-info .info .resume{
    font-size: 1rem;
    font-family: Open Sans,sans-serif;
    font-weight: 400;
  }

  & .card-info .container-serie .content-info .info .tags{
    margin-top: 2rem;
  }

  & .card-info .container-serie .content-info .info .tags span{
    margin-right: 1rem;
    background-color: #d8d8d8;
    padding: 0.25em 0.75em;
    border-radius: 1rem;
    color: #141414;
    border: 1px solid #d8d8d8;
    font-family: 'Roboto', sans-serif;
  }

  & .card-info .container-serie .content-info .info .creators{
    margin-top: 2rem;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  margin: 0 4rem 4rem ;

  @media(max-width:1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1rem 1rem ;
  }

  & .cast-member{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 1rem;

    @media(max-width:767px) {
      margin:0rem;
    }
  }
  
  & .cast-member img{
    width: 100%;
    border-radius: 1rem;
    transition: .3s all ease;
  }


  & .cast-member p{
    display: flex;
    justify-content: center;
    text-align:center;
    align-items: center;
    margin-top:.5rem;
    font-size: 1rem;
    font-family: Open Sans,sans-serif;
    font-weight: 400;

  }







  & .series-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 1rem;
    position:relative;
  }

  & a{
    justify-content: center;
    text-align: center;
  }
  
  & .series-card img{
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

  & .series-card .details .DateProgress p{
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


  & .series-card .details h2{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 200;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }





  & .movie-card-gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 1rem;
  }

  & .movie-card-gallery img{
    width: 100%;
    border-radius: 1rem;
    transition: .3s all ease;
  }
`

export const TitleButton = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.8rem;
  font-family: Source-Sans-Pro,sans-serif;
  color: #fff;

  @media(max-width: 767px) {
    font-size: 1.6rem;
  }
`

export const Button = styled.button`
  background-color: #3b3b3b;
  color: #fff;
  padding: 0.5rem 0.9rem;
  border: none;
  text-decoration: none;
  border-radius: 1rem;
  font-size: 1em;
  box-shadow: #00000029 0 3px 6px, #0000003b 0 3px 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: .3s all ease;

  &:hover{
    background-color:#5A189A;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`

export const Span = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #3b3b3b;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  transition: .3s all ease;
  cursor: pointer;

  &:hover{
    background-color: #5A189A;
  }
`
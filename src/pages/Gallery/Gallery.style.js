import styled from "styled-components";

export const Main = styled.main`
  margin: 3rem;
  padding-top: 4rem;

  @media(max-width:767px) {
    margin: 1rem;
  }
`

export const Name = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  font-family: Open Sans,sans-serif;
  font-weight: 400;
  color: #fff;
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: Source-Sans-Pro,sans-serif;
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;

  @media(max-width: 767px){
    font-size: 1.953rem;
    display: flex;
    justify-content: center;
  }
`

export const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media(max-width:767px) {
    justify-content:center;
    align-items: center;
  }


  & .movie-card-gallery {
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
  }

  & .movie-card-gallery img {
    display: flex;
    justify-content: center;
    max-width: 250px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    transition: .3s all ease;
  }
`
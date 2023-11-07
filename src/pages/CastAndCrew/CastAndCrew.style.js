import styled from "styled-components";

export const Main = styled.main`
  margin: 3rem;
  padding-top: 3rem;

  @media(max-width:767px){
    margin:.5rem;
    padding-top: 4rem;
  }

  & a{
    color: #fff;
    transition: .3s all ease;
  }

  & a p{
  font-size: 1rem;
  text-decoration: underline;
  font-family: Open Sans,sans-serif;
  font-weight: 400;
  }
`


export const Title = styled.h2`
  text-transform: uppercase;
  font-family: Source-Sans-Pro,sans-serif;
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;

  @media(max-width:1024px) {
    font-size: 1.953rem;
  }
`

export const CrewList = styled.div`
  margin-top: 1.5rem;

  & .movie-card .details dl{
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 0px 2rem;
  }

  & .movie-card .details dl dt{
    margin-top: 0.2rem;
    font-family: 'Roboto', sans-serif;
  }

  & .movie-card .details dl dd{
    margin-top: 0.2rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const Name = styled.h3`
  font-family: Source-Sans-Pro,sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

`

export const CastList = styled.div`
  margin-top: 2rem;

  & .movie-credits{
    display: flex;
    gap: 1rem;
  }

  & .movie-credits img{
    border-radius: 1rem;
    background: #b1b1b1;
    width: auto;
  }

  & .movie-credits div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  & .movie-credits div p{
    text-decoration: none;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-family: Open Sans,sans-serif;
    font-weight: 400;

    &:nth-child(2){
      color: #b1b1b1;
      font-weight: 400;
    }

  }
`

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill,minmax(min(15rem,100%),1fr));
`
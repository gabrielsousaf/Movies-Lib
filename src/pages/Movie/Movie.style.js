import styled from "styled-components";

export const Main = styled.main`
  & .movie-card{
    position:relative;
  }

  & .poster{
    position: absolute;
    width: 100%;
    height: 450px;
    left: 50%;
    top: 0;
    z-index: -1;
    overflow: hidden;
    transform: translate(-50%);
    border-radius: 20px;
  }

  & .poster::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,4), rgba(0,0,0,0.9));
  }

  & .poster img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  & .card-info{
    position: relative;
    display: flex;
    justify-content: center;
    padding:0px 2rem;
  }

  & .card-info .container-serie{
    margin-top: 100px;
    position: relative;
    z-index: 2;
    padding: 2rem;
    background-color: rgba(30,30,30,0.7);
    box-shadow: 0 8px 24px rgba(255,255,255,.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
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
    font-size: 2.8rem;
    letter-spacing: 1px;
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
    color: #fff;
    font-weight: 400;

    @media(max-width:1024px) {
      display: none;
    }
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
    color: #ffd700;
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
    flex-directon: column;
    align-items:center;
    text-align:center;
    background: #262626;
    border: 1px solid #ffffff12;
    border-radius: 1rem;
    box-shadow: 0 6px 18px rgba(0,0,0,.22);
    padding: 1rem;
    margin:1rem;
    transition: transform .25s ease, box-shadow .25s ease;

    @media(max-width:767px) {
      margin:0rem;
    }
  }
  
  & .cast-member img{
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: .75rem;
    box-shadow: 0 4px 12px rgba(0,0,0,.25);
    transition: transform .25s ease;

    &:hover{
      transform: scale(1.05);
    }
  }


  & .cast-member p{
    margin: .2rem 0;
    font-size: #f1f1f1;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif; 
  }

  & .cast-member p:first-of-type {
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
  }

  & .cast-member p:last-of-type {
    font-size: .85rem;
    opacity: .85;
    font-style: italic;
  }

  & .series-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin: 1rem;
    position:relative;
    overflow: hidden;
    background: #262626;
    border: 1px solid #ffffff12;
    border-radius: 1rem;
    box-shadow: 0 6px 18px rgba(0,0,0,.22);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
  }

  & a{
    justify-content: center;
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
  }
  
  & .series-card img{
    width: 100%;
    border-radius: 1rem;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;

    &:hover{
      border: 5px solid #5A189A;
      transform: translateY(-2px) scale(1.01);
      box-shadow: 0 18px 32px rgba(0,0,0,.35);
    }
  }


  & .DateProgress{
    width: 100%;
    top: 1rem;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .75rem;
    border-radius: 1rem;
    background: #14141480;
    backdrop-filter: blur(8px) saturate(140%);
    -webkit-backdrop-filter: blur(8px) saturate(140%);
    border: 1px solid #ffffff1c;
    box-shadow: 0 6px 18px rgba(0,0,0,.25);
    }

  & .progressbar{
    margin-right: 10px;
    background-color: #1f1f1f;
    border-radius:100%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,.28);
  }

  & .series-card .details .DateProgress p{
    margin-left: 10px;
    color: #f8f8f8;
    border-radius: 999px;
    padding: 0.25rem .75rem;
    font-size: 1rem;
    font-weight: 700;
    display:flex;
    align-items: center;
    background-color: #2a2a2a99;
    border: 1px solid #ffffff1a;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
  }


  & .series-card .details h2{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    font-family: 'Source Sans 3', sans-serif;
    padding: 1rem;
  }


/* Skeletons */
  & .skeleton-row{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px; 
    width: 100%;

    @media (max-width: 1024px){
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 640px){
      grid-template-columns: repeat(2, 1fr);
    }
  }

  & .skeleton-card{
    width: 100%;
    height: 280px;
    border-radius: 1rem;
    background: linear-gradient(90deg, #2b2b2b 25%, #3a3a3a 37%, #2b2b2b 63%);
    background-size: 400% 100%;
    animation: shimmer 1.4s ease infinite;
  }

  @keyframes shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: 0 0; }
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
  background: linear-gradient(135deg, #5A1899, #9d4edd);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  cursor:pointer;
  transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
  color: #fff;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover{
    filter: brightness(1.08);
    box-shadow: 0 10px 20px rgba(93, 24, 153, .38);
    transform: translateY(-1px);
  }

  &:active{
    transform: scale(0.98);
  }

  @media(max-width:767px){
    display: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  & .see-all{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
    color: #fff;
    background: #2d2d2d;
    transition: background .2s ease, transform .2s ease, box-shadow .2s ease, color .2s ease;
    text-decoration: none;

    &:hover{
      background: #3a3a3a;
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(0,0,0,.28);
      color: #f2e7ff;
    }

    &:active{
      transform: scale(0.98);
    }
  }

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
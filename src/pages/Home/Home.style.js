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
  font-family: 'Poppins', 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.5rem;
  color:#fff;
  position: relative;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }

  &::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, #7b2cbf, #9d4edd);
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

export const Button = styled.span`
  background: linear-gradient(135deg, #5A1899, #9d4edd);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  cursor:pointer;
  transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
  color: #fff;
  border: none;

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
    overflow: hidden;
    background: #262626;
    border: 1px solid #ffffff12;
    border-radius: 1rem;
    box-shadow: 0 6px 18px rgba(0,0,0,.22);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;

    &:hover{
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(0,0,0,.35);
      border-color: #ffffff24;
      background: #2b2b2b;
    }

    @media (max-width: 767px) {
      margin: 0rem;
    } 
  }

  & a{
    justify-content: center;
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
  }
  
  & img{
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

  & p{
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

`
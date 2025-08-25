import styled from "styled-components";

export const Main = styled.main`
  padding-top:8rem;
`

export const Title = styled.h1`
  font-family: 'Poppins', 'Open Sans', sans-serif;
  font-size: 2.5rem;
  padding: 1rem 1rem 1.75rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  &::after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: .5rem;
    width: 60px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, #7b2cbf, #9d4edd);
  }

  @media(max-width:767px) {
    font-size: 2.5rem;
  }
`

export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media(max-width: 1024px){
    justify-content:center;
  }

  & .series-card{
    width: 30%;
    color: #fff;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    align-items: center;
    align-items: stretch;
    margin: 0.5rem;
    position: relative;
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

    @media(max-width: 1024px){
      width:48%;
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
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: 'Source Sans 3', sans-serif;
  padding: 2rem 1rem;

  & .page{
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-weight: 700;
    letter-spacing: .2px;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #5A1899, #9d4edd);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
    box-shadow: 0 6px 14px rgba(93,24,153,.35);

    &:hover{
      filter: brightness(1.07);
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(93,24,153,.4);
    }
    &:active{
      transform: scale(0.98);
    }
    & svg{ font-size: 1.2rem; }
  }

  & p{
    font-weight: 700;
    font-size: 1.05rem;
    color: #eaeaea;
    min-width: 90px;
    text-align: center;
  }

  & .not-page{
    background: #2e2e2e;
    color: #9a9a9a;
    cursor: not-allowed;
    box-shadow: none;
    &:hover{ transform:none; filter:none; box-shadow:none; }
  }
`
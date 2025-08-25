import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  margin-top: 2rem;
  background: #121212;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
  color: #aaa;

  @media(max-width:767px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`

export const P = styled.p`
  color: rgb(177, 177, 177) ;
  margin: 0;
  font-size: 0.95rem;
  
  @media(max-width: 767px){
    margin-bottom: 1rem;
  }
`

export const A = styled.a`
  color: rgb(157, 78, 221);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover{
    color: rgb(200, 140, 255);
    text-decoration: underline;
  }
`
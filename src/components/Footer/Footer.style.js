import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 2rem;
  font-size: 1.3rem;

  @media(max-width:767px) {
    display: block;
    text-align: center;
  }
`

export const P = styled.p`
  color: rgb(177, 177, 177) ;
  margin-right: 1rem;
  
  @media(max-width: 767px){
    margin-bottom: 1rem;
  }
`

export const A = styled.a`
  color: rgb(157, 78, 221);
`
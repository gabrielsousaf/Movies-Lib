import { ContainerFooter, P, A } from "./Footer.style"

const Footer = () => {
  return (
    <ContainerFooter className="container-footer">
      <P>Developed by  <A href="https://github.com/gabrielsousaf" target="_blank" rel="noopener noreferrer"> Gabriel Furtado</A> </P>
      <P>Visit the <A href="https://github.com/gabrielsousaf/Movies-Lib" target="_blank" rel="noopener noreferrer">Github Repo</A> </P>
    </ContainerFooter>
  )
}

export default Footer;

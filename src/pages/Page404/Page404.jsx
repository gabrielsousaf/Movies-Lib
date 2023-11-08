import { Main, Container, H1, ContainerName, H2 } from "./Page404.style"

import { Helmet } from 'react-helmet';

const Page404 = () => {
  return (
    <Main className="main">
      <Helmet title='404: This page could not be found. ' />
      <Container className="container">
        <H1>404</H1>
        <ContainerName>
          <H2>This page could not be found.</H2>
        </ContainerName>
      </Container>
    </Main>
  )
}

export default Page404;
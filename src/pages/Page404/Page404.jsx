import { Helmet } from 'react-helmet';

import './Page404.css'

const Page404 = () => {
  return (
    <main className="main">
      <Helmet title='404: This page could not be found. ' />
      <div className="container">
        <h1>404</h1>
        <div>
          <h2>This page could not be found.</h2>
        </div>
      </div>
    </main>
  )
}

export default Page404;
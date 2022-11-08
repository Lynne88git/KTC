import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Store from './components/pages/Store/Store'
import NotFound from './components/pages/NotFound/NotFound'
import { MainNavbar } from './components/layouts/Navbar/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Footer from './components/layouts/Footer/Footer'
// import IMAGE from './assets/icons/twitter.png'
// import LOGO from './assets/icons/facebook.svg'

function App() {
  return (
    //Wrapping app inside ShoppingCartProvider so that entire app has access to ShoppingCartProvider value
    <ShoppingCartProvider>
      <MainNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App

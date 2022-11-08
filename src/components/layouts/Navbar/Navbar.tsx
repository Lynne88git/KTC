import React from 'react'
import { Button, Container, Row, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ProductNav } from '../ProductNav/ProductNav'
import Logo from '../../../assets/logos/logo.png'
import './Navbar.scss'
import { useShoppingCart } from '../../../context/ShoppingCartContext'

export function MainNavbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
      <Navbar sticky="top" className="bg-darkestGray" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {' '}
            <img
              src={Logo}
              alt="logo"
              className="mx-2"
              style={{ width: '6rem' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="text-white mx-2 text-semibold"
                to="/"
                as={Link}
              >
                Store
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                About Us
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                Today&#39;s Deals
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                Service Center
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                Sell
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                Help
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="text-white mx-2 text-semibold">
                More
              </Nav.Link>
            </Nav>
            <Button onClick={openCart} className="cart-btn">
              <FontAwesomeIcon
                className="text-white"
                icon={faShoppingCart}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'relative',
                }}
              />
              {cartQuantity > 0 && (
                <div className="text-white rounded-circle bg-danger d-flex justify-content-center align-items-center cart-quantity">
                  {cartQuantity}
                </div>
              )}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <ProductNav />
      </Row>
    </>
  )
}

import React from 'react'
import { Container, Row } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { Search } from '../../form/Search/Search'
import './ProductNav.scss'

export function ProductNav() {
  return (
    <Row sticky="top" className="bg-darkGray shadow-sm mb-3">
      <Container className="my-3">
        <Search />
      </Container>
    </Row>
  )
}

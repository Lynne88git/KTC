import { IProduct } from '../../../models/IProductList'
import { Card, Container, Row } from 'react-bootstrap'
//import './SearchResults.scss'

export function SearchResults(props: { product: IProduct }) {
  const { product } = props

  return (
    <Container className="bg-white p-3 grid-container-single ">
      <Row>
        <Container className="d-flex justify-content-start">
          <Card.Img
            src={product.thumbnail}
            alt={product.title}
            style={{ height: 'auto', width: '100px' }}
          />
          <span className="align-middle">
            <Card.Title className="my-3 mx-3">{product.title}</Card.Title>
          </span>
        </Container>
      </Row>
    </Container>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { IProduct } from '../models/IProductList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons'
import { formatCurrency } from '../utils/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

function ProductList() {
  const [products, setProducts] = useState<IProduct[] | null>()

  useEffect(() => {
    const url = 'https://dummyjson.com/products'
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products)
      })
      .catch((error) => {
        console.log('Error:' + error)
      })
  }, [])

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  return (
    <>
      <div>
        <div className="grid-container">
          {products
            ? products.map((product) => {
                const quantity = getItemQuantity(product.id)
                return (
                  <div className="grid-child" key={product.id}>
                    <div className="d-flex justify-content-center">
                      <Card className="h-100 pb-3 my-4 product-card border-0 bg-ghostGray">
                        <Card.Img
                          variant="top"
                          src={product.thumbnail}
                          alt={product.title}
                          height="200px"
                          style={{ objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column p-4">
                          <Card.Title className="d-flex justify-content-between align-items-baseline">
                            {product.title}
                          </Card.Title>
                          <Card.Title className="d-flex justify-content-between align-items-baseline">
                            <span className="text-muted product-price">
                              {formatCurrency(product.price)}
                            </span>
                          </Card.Title>
                          <Card.Text>
                            {product.description.length > 50
                              ? `${product.description.substring(0, 50)}...`
                              : product.description}
                          </Card.Text>
                        </Card.Body>
                        <div className="mt-auto p-4">
                          {quantity === 0 ? (
                            <Button className="search-btn br-1 bg-mint w-100">
                              {' '}
                              <FontAwesomeIcon
                                className="text-white mx-2"
                                icon={faShoppingCart}
                                style={{
                                  width: '1.2rem',
                                  height: '1.2rem',
                                  position: 'relative',
                                }}
                              />
                              Add to cart
                            </Button>
                          ) : (
                            <div
                              className="d-flex align-items-center flex-column"
                              style={{ gap: '.5rem' }}
                            >
                              <div
                                className="d-flex justify-content-center align-items-center bg-lightestGray p-2 br-2"
                                style={{ gap: '.5rem' }}
                              >
                                <Button
                                  className="btn-transparent"
                                  onClick={() =>
                                    decreaseCartQuantity(product.id)
                                  }
                                >
                                  <FontAwesomeIcon
                                    className="text-mint mx-2"
                                    icon={faMinus}
                                    style={{
                                      width: '1.2rem',
                                      height: '1.2rem',
                                      position: 'relative',
                                    }}
                                  />
                                </Button>
                                <div className="text-midGray">
                                  <span className="px-2 text-midGray product-quantity">
                                    {quantity}
                                  </span>
                                  in cart
                                </div>
                                <Button
                                  className="btn-transparent"
                                  onClick={() =>
                                    increaseCartQuantity(product.id)
                                  }
                                >
                                  <FontAwesomeIcon
                                    className="text-mint mx-2"
                                    icon={faPlus}
                                    style={{
                                      width: '1.2rem',
                                      height: '1.2rem',
                                      position: 'relative',
                                    }}
                                  />
                                </Button>
                              </div>
                              <Button
                                className="btn-transparent text-mint"
                                onClick={() => removeFromCart(product.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

export default ProductList

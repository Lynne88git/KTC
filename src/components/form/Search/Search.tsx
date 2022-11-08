import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Container } from 'react-bootstrap'
import { IProduct } from '../../../models/IProductList'
import Button from 'react-bootstrap/Button'
import { SearchResults } from '../../pages/SearchResults/SearchResults'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Search() {
  const [productFound, setProductFound] = useState<IProduct[] | null>()
  const [productSearch, setProductSearch] = useState('')

  const searchForProducts = async (
    query: string
  ): Promise<IProduct[] | null> => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    )
    return (await response.data).products
  }

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLInputElement
    setProductSearch(input.value)
  }

  useEffect(() => {
    ;(async () => {
      //encodeURIComponent used to UTF-8 encode search text
      const query = encodeURIComponent(productSearch)
      if (query) {
        const response = await searchForProducts(query)
        setProductFound(response)
      }
    })()
  }, [productSearch])

  return (
    <>
      <Row>
        <div className="d-flex justify-content-center w-100">
          <Form
            className="searchForm w-100"
            onSubmit={(event) => search(event)}
          >
            <InputGroup className="d-flex justify-content-center">
              <input
                id="searchText"
                data-testid="search-input"
                className="p-2 text-white bg-midGray search-input"
                placeholder="Input your search..."
                aria-label="Input your search..."
              />
              <Button
                type="submit"
                className="bg-mint text-white search-btn"
                variant="outline-none"
                data-testid="search-submit"
              >
                Search
              </Button>
            </InputGroup>
          </Form>
        </div>

        <Container className="pt-4 pb-2 mx-5">
          {productSearch && <p>Results for {productSearch}...</p>}
        </Container>
      </Row>
      <div className="br-half position-absolute container search-results bg-white">
        {productFound
          ? productFound.length &&
            productFound.map((product) => (
              <SearchResults key={product.id} product={product} />
            ))
          : null}
      </div>
    </>
  )
}

import React from 'react'
import 'jest'
import { screen, render } from '@testing-library/react'
import { Search } from '../../../src/components/form/Search/Search'

describe('Store component test suite', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    render(<Search />)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  test('Renders correctly initial document', () => {
    // const form = document.querySelectorAll('form')
    // expect(form).toHaveClass('searchForm')

    const input = document.querySelectorAll('input')
    expect(input).getByTestId('search-input')

    const button = document.querySelector('button')
    expect(button).toHaveTextContent('Search')

    expect(screen.getByText('')).toBeTruthy
  })
})

import React from 'react'
import Logo from '../../../assets/logos/logo.png'
import './Footer.scss'

export default function Footer() {
  const currentDate = new Date()
  const date = currentDate.getFullYear()
  return (
    <>
      <footer className="d-flex justify-content-center bg-darkestGray">
        <p className="text-white mx-2 text-regular footer-text mt-3">
          Copyright &copy; {date}{' '}
          <img
            src={Logo}
            alt="logo"
            className="mx-2"
            style={{ width: '4rem' }}
          />{' '}
          All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

import React, { FC } from 'react'
import './Home.scss'

interface HomeProps {
  name?: string
}

const Home: FC<HomeProps> = () => <div className="Home">Home Component</div>

export default Home

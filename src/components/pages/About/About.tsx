import React, { FC } from 'react'
import './About.scss'

interface AboutProps {
  name?: string
}

const About: FC<AboutProps> = () => (
  <div className="About">
    <h3>About Component</h3>
  </div>
)

export default About

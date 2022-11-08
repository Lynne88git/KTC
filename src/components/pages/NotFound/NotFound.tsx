import React, { FC } from 'react'
import './NotFound.scss'

interface NotFoundProps {
  name?: string
}

const NotFound: FC<NotFoundProps> = () => (
  <div className="NotFound">404 Page Not Found</div>
)

export default NotFound

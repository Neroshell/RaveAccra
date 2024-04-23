import React from 'react'
import './PageTitle.css'

function PageTitle(props) {
  return (
    <div className='page-title'>
        <div className='page-child'>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>

        </div>
     
    </div>
  )
}

export default PageTitle

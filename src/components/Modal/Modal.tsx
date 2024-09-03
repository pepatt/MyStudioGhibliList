import React from 'react'
import "./Modal.scss"

interface modalProps {
    ghibliData: {
        imageLink: string;
        movieName: string;
        status?: boolean
    }[],
}

function Modal({ ghibliData }:modalProps ) {

    console.log(ghibliData);
  return (
    <div className='modal'>
        {ghibliData.map((data) => (
            <div>Name: {data.movieName}
            || Have watched: 
            {data.status === false
            ? "No"
            : "Yes"
            } </div>
        ))}
    </div>
  )
}

export default Modal
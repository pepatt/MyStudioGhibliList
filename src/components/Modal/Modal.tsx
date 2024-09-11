import React from 'react'
import "./Modal.scss"

type toggleFunction = () => void;
interface modalProps {
    ghibliData: {
        imageLink: string;
        movieName: string;
        status?: boolean
    }[],
    toggleModal: toggleFunction
}

function Modal({ ghibliData, toggleModal }:modalProps) {

    console.log(ghibliData);
  return (
    <div className='modal'>
        <div onClick = {toggleModal} className="modal__background">
        </div>
        <div className="modal__wrap">
            <div onClick={toggleModal} className="modal__exit-modal-btn">X</div>
            <div className="modal__card">
                <div className="modal__card-label">Movie Title</div>
                {ghibliData.map((data) => (
                    <div className='modal__movie-names'>{data.movieName}</div>
                ))}
            </div>
            <div className="modal__card">
                <div className="modal__card-label">Watched?</div>
                {ghibliData.map((data) => (
                    <div className='modal__yes-no'>
                    {data.status === false
                    ? "No"
                    : "Yes"
                } </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Modal
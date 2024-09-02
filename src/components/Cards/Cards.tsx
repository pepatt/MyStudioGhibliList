import React, { useEffect, useState } from 'react'
import './Cards.scss'

import ghibli_0 from '../../assets/images/ghibli_0.png'
import ghibli_1 from '../../assets/images/ghibli_1.png'
import ghibli_2 from '../../assets/images/ghibli_2.png'
import ghibli_3 from '../../assets/images/ghibli_3.png'
import ghibli_4 from '../../assets/images/ghibli_4.png'
import ghibli_5 from '../../assets/images/ghibli_5.png'
import ghibli_6 from '../../assets/images/ghibli_6.png'
import ghibli_7 from '../../assets/images/ghibli_7.png'
import ghibli_8 from '../../assets/images/ghibli_8.png'
import ghibli_9 from '../../assets/images/ghibli_9.png'
import ghibli_10 from '../../assets/images/ghibli_10.png'
import ghibli_11 from '../../assets/images/ghibli_11.png'
import ghibli_12 from '../../assets/images/ghibli_12.png'
import ghibli_13 from '../../assets/images/ghibli_13.png'
import ghibli_14 from '../../assets/images/ghibli_14.png'
import ghibli_15 from '../../assets/images/ghibli_15.png'
import ghibli_16 from '../../assets/images/ghibli_16.png'
import ghibli_17 from '../../assets/images/ghibli_17.png'
import ghibli_18 from '../../assets/images/ghibli_18.png'
import ghibli_19 from '../../assets/images/ghibli_19.png'
import ghibli_20 from '../../assets/images/ghibli_20.png'
import ghibli_21 from '../../assets/images/ghibli_21.png'

function Cards( ) {
    const images = [
        ghibli_0, 
        ghibli_1, 
        ghibli_2, 
        ghibli_3, 
        ghibli_4,
        ghibli_5,
        ghibli_6, 
        ghibli_7, 
        ghibli_8, 
        ghibli_9, 
        ghibli_10,
        ghibli_11,
        ghibli_12, 
        ghibli_13, 
        ghibli_14, 
        ghibli_15, 
        ghibli_16,
        ghibli_17, 
        ghibli_18, 
        ghibli_19,
        ghibli_20,
        ghibli_21
    ]


    const [image, setImage] = useState<string | undefined>(undefined)
    const [repeatedIntArr, setRepeatedIntArr] = useState<number[]>([])
    const [countYes, setCountYes] = useState<number>(0);
    const [countNo, setCountNo] = useState<number>(0);

    function getRandInt() {
        return Math.floor(Math.random() * images.length)
    }

    function getImg() {
        const randInt = getRandInt()
        if(repeatedIntArr.includes(randInt) == false) {
            setRepeatedIntArr(prev => [...prev, randInt])
            setImage(images[randInt])
        } else if (repeatedIntArr.length === 22) {
            //the function has finished it's job
        } else {
            getImg()
        }
    }

    console.log(repeatedIntArr)

    function handleYes() {
        setCountYes(prev => prev + 1)
        getImg()
    }

    function handleNo() {
        setCountNo(prev => prev + 1)
        getImg()
    }

    useEffect(() => {
        getImg()
    }, []);


  return (
    <div className='card'>
        <div className="card__wrap">
            {repeatedIntArr.length <= 22 
            ? <img src={image} alt="img" className="card__img" />
            : <div> we ran out of movies </div>}
            <div className="card__controls">
                <div className="card__controls--no" onClick={handleNo} >Not Watched</div>
                <div className="card__controls--yes" onClick={handleYes} >Already Watched</div>
                {repeatedIntArr.length >= 22
                ? <div>yes: {countYes} No: {countNo} </div> 
                : <div></div> }
            </div>
        </div>
    </div>
  )
}

export default Cards
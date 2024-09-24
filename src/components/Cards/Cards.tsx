import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cards.scss'

import Modal from '../Modal/Modal'

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

type movies = {
    imageLink: string;
    movieName: string;
    status?: boolean
}

function Cards() {

    const data: movies[] = [{
        imageLink: ghibli_0,
        movieName: "My Neighbors the Yamadas"
    },
    {
        imageLink: ghibli_1,
        movieName: "Princess Mononoke"
    },
    {
        imageLink: ghibli_2,
        movieName: "My Neighbour Totoro"
    },
    {
        imageLink: ghibli_3,
        movieName: "Ponyo"
    },
    {
        imageLink: ghibli_4,
        movieName: "Kiki's Delivery Service"
    },
    {
        imageLink: ghibli_5,
        movieName: "The Boy and the Heron"
    },
    {
        imageLink: ghibli_6,
        movieName: "Howl\'s Moving Castle"
    },
    {
        imageLink: ghibli_7,
        movieName: "Grave of the Fireflies"
    },
    {
        imageLink: ghibli_8,
        movieName: "Spirited Away"
    },
    {
        imageLink: ghibli_9,
        movieName: "The Wind Rises"
    },
    {
        imageLink: ghibli_10,
        movieName: "Tales from Earthsea"
    },
    {
        imageLink: ghibli_11,
        movieName: "The Secret World of Arrietty"
    },
    {
        imageLink: ghibli_12,
        movieName: "Castle in the Sky"
    },
    {
        imageLink: ghibli_13,
        movieName: "Nausicaä of the Valley of the Wind"
    },
    {
        imageLink: ghibli_14,
        movieName: "The Tale of Princess Kaguya"
    },
    {
        imageLink: ghibli_15,
        movieName: "When Marnie Was There"
    },
    {
        imageLink: ghibli_16,
        movieName: "The Cat Returns"
    },
    {
        imageLink: ghibli_17,
        movieName: "From Up On Poppy Hill"
    },
    {
        imageLink: ghibli_18,
        movieName: "Crimson Pig / Porco Rosso"
    },
    {
        imageLink: ghibli_19,
        movieName: "Pom Poko"
    },
    {
        imageLink: ghibli_20,
        movieName: "Whisper of the Heart"
    },
    {
        imageLink: ghibli_21,
        movieName: "Only Yesterday"
    }
    ]
    
    const [ghibliData,] = useState<movies[]>(data)
    const [image, setImage] = useState<string | undefined>(undefined)
    const [repeatedIntArr, setRepeatedIntArr] = useState<number[]>([])
    const [countYes, setCountYes] = useState<number>(0);
    const [countNo, setCountNo] = useState<number>(0);
    const [randInt, setRandInt] = useState<number>(Math.floor(Math.random() * ghibliData.length));
    const [modal, setModal] = useState<boolean>(false)

    function getImg() {
        let newRandInt;
        const usedIndices = new Set(repeatedIntArr);
    
        do {
            newRandInt = Math.floor(Math.random() * ghibliData.length);
        } while (usedIndices.has(newRandInt));
    
        setRandInt(newRandInt);
        setRepeatedIntArr(prev => [...prev, newRandInt]);
        setImage(ghibliData[newRandInt].imageLink);
    }
    

    console.log(randInt);

    function handleYes() {
        ghibliData[randInt].status = true
        setCountYes(prev => prev + 1)
        getImg()
    }

    function handleNo() {
        ghibliData[randInt].status = false
        setCountNo(prev => prev + 1)
        getImg()
    }

    function toggleModal() {
        setModal(prev => !prev)
    }

    function handleReload() {
        location.reload();
    }

    useEffect(() => {
        getImg()
    }, []);

    console.log("time")

  return (
    <div className='card'>
        {modal === true 
        ? <Modal toggleModal = {toggleModal} ghibliData = {ghibliData}/>
        : ""}
        <div onClick={handleReload} className="card__home-btn">Ghibli</div>
        <Link to = '/login' className="card__auth-btn">Authorize</Link>
        <div className={`card__wrap ${
            repeatedIntArr.length <= 21 
            ? ""
            : "card__wrap--results"}`}>
            {repeatedIntArr.length <= 21 
            ? <img src={image} alt="img" className="card__img" />
            : <div className='card__empty-message'> We ran out of movies </div>}
                {repeatedIntArr.length <= 21 
                ? 
                <div className="card__controls">
                    <div className="card__controls--yes" onClick={handleYes} >Y</div>
                    <div className="card__controls--no" onClick={handleNo} >N</div>
                </div>
                : ""}
            <div className="card__outcome">
                {repeatedIntArr.length >= 22
                ? <div>Watched: {countYes}/{countNo + countYes} </div> 
                : "" }
            </div>
            <div onClick={toggleModal} className={`${
            repeatedIntArr.length <= 21 
            ? ""
            : "card__details-btn"}`}>
                {repeatedIntArr.length >= 22
                ? "DETAILS" 
                : "" }
            </div>
        </div>
    </div>
  )
}

export default Cards
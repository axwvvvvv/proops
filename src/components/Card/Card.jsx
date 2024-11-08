import React from 'react'
import './Card.scss'

const Card = ({ title='Пока не указано' , price='Не указано' , photo='https://steamuserimages-a.akamaihd.net/ugc/1829040563493991891/74C475FCD2F54226FDE8A6A5583EEC3440DD3242/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'}) => {
  return (
    <>
    <div className="card">
            <img src={photo} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
            <button>Купть</button>
        </div>
    </>
  )
}

export default Card
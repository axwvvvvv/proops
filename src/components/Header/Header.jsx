import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
    <Title>Транспорт</Title>
    <div className="wrap">
        <Card title='Велосипед' photo="/card-1.jpg" price='200$'/>
        <Card title='Мотоцикл' photo='/card-2.jpg' price='1000$'/>
        <Card title='Самокат' photo='/card-3.jpg' price='150$'/>
        <Card/>

    </div>
    </>
  )
}

export default Header
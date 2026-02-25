import React from 'react'

const Daniel = () => {
    const name:string = "Daniel"
    const age:number = 24
    const favGame:string = "League of legends"
    const favFilm:string = "Lost in translation"
    const currentJob:string = "Popeyes" 

  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    <div>{favGame} 😈</div>
    <div>{favFilm}</div>
    <div>{currentJob}</div>

    </>
  )
}

export default Daniel
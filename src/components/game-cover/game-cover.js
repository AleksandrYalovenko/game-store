import React from 'react'
import './game-cover.css'

function GameCover({ image }) {
	return (
		<div
			className='game-cover'
			style={{ backgroundImage: `url(${image})` }}
		></div>
	)
}

export default GameCover

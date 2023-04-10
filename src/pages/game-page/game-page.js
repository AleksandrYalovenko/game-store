import React from 'react';
import { useSelector } from 'react-redux';
import GameBuy from '../../components/game-buy/game-buy';
import GameCover from '../../components/game-cover/game-cover';
import GameGenre from '../../components/game-genre/game-genre';
import './game-page.css';

const GamePage = () => {
	const currentGame = useSelector((state) => state.games.currentGame);
	if (!currentGame) return null;
	return (
		<div className='game-page'>
			<h1 className='game-page__title'>{currentGame.title}</h1>
			<div className='game-page__content'>
				<div className='game-page__left'>
					<iframe
						width='90%'
						height='400px'
						src={currentGame.video}
						title='Youtube Video Player'
						frameBorder='0'
					></iframe>
				</div>
				<div className='game-page__right'>
					<GameCover image={currentGame.image} />
					<p>{currentGame.description}</p>
					<p className='secondary-text'>Популярні теги цього продукту:</p>
					{currentGame.genres.map((genre) => (
						<GameGenre genre={genre} key={genre} />
					))}
					<div className='game-page__buy-game'>
						<GameBuy game={currentGame} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;

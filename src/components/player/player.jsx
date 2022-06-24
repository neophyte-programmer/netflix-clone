import React, { useState, useContext, createContext } from 'react'
import { ReactDOM } from 'react'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

export const PlayerContext = createContext()

const Player = ({ children, ...restProps }) => {
	const [showPlayer, setShowPlayer] = useState(false)
	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	)
}

const PlayerVideo = ({ src, ...restProps }) => {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext)

	return showPlayer
		? ReactDOM.createPortal(
				<Overlay onClick={() => setShowPlayer(false)}>
					<Inner>
						<video id='nutiflix-player' controls>
							<source src={src} type='video/mp4' />
						</video>
						<Close />
					</Inner>
				</Overlay>
		  )
		: null
}

const PlayerButton = ({ ...restProps }) => {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext)

	return (
		<Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
			Play
		</Button>
	)
}

Player.Video = PlayerVideo
Player.Button = PlayerButton

export default Player

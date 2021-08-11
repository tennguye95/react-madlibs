import React from 'react';
import './Story.css';

function Story({ setShowStory, setStory, story }) {
	const restart = () => {
		setShowStory(false);
		setStory([]);
	};
	return (
		<div className='Story'>
			<p>
				There was a {story.color} {story.noun} who loved a {story.adjective} {story.noun2}.
			</p>
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default Story;

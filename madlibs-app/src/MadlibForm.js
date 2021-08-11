import React, { useState } from 'react';
import './MadlibForm.css';

function MadlibForm({ setShowStory, createStory }) {
	const INITIAL_STATE = { noun: '', noun2: '', adjective: '', color: '' };
	const [formData, setFormData] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createStory({ ...formData });
		setFormData(INITIAL_STATE);
		setShowStory(true);
	};
	return (
		<div className='MadlibForm'>
			<form onSubmit={handleSubmit}>
				<input
					required
					id='noun'
					type='text'
					name='noun'
					placeholder='Noun'
					value={formData.noun}
					onChange={handleChange}
				/>
				<input
					required
					id='noun2'
					type='text'
					name='noun2'
					placeholder='Noun 2'
					value={formData.noun2}
					onChange={handleChange}
				/>
				<input
					required
					id='adjective'
					type='text'
					name='adjective'
					placeholder='Adjective'
					value={formData.adjective}
					onChange={handleChange}
				/>
				<input
					required
					id='color'
					type='text'
					name='color'
					placeholder='Color'
					value={formData.color}
					onChange={handleChange}
				/>
				<button>Get Story</button>
			</form>
		</div>
	);
}

export default MadlibForm;

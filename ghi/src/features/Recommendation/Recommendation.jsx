import React, { useState, useEffect } from 'react';
import { useCreateRecommendationMutation, useGetTokenQuery } from '../../app/apiSlice';
import RecommendationResults from '../../features/Recommendation/Recommendationresults';
import loading from './loading.gif';
import {useRef} from 'react'
import './Recommendation.css'
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../Buttons/SubmitBtn';


function RecommendationForm() {
	const navigate = useNavigate()
	const [interest, setInterest] = useState('');
	const [location, setLocation] = useState('');
	const [create, result] = useCreateRecommendationMutation();
	const [isLoading, setIsLoading] = useState(false);
	const {data: account, isFetching} = useGetTokenQuery()
	const login = useRef(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		await create({ interest, location });
		setIsLoading(false);
	};

	useEffect(() => {
    if (login.current) {
      login.current = false;
    } else if (!isLoading && !account) {
      navigate('/');
    }
  	}, [account, isLoading, navigate]);

	return (
		<>
		<div className='recommendation-form'>
			<div className='recommendation'>
				<div className='row'>
				<form onSubmit={handleSubmit} className="col s12">
					<input
						id="interest"
						placeholder='Interest'
						type="text"
						name="interest"
						value={interest}
						onChange={(e) => setInterest(e.target.value)}
						required
						/>
					<input
						placeholder='Location'
						id="location"
						type="text"
						name="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						required
						/>
					<div className='center'>
							<SubmitBtn />
							</div>
				</form>

				{isLoading ? (
					<img id='spinner' src={loading} />
					) : (
						<RecommendationResults
						data={result.data}
						location={location}
						interest={interest}
						/>
						)}
				</div>
			</div>
		</div>
		</>
		);
	}

	export default RecommendationForm;

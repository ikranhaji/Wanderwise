import {
	useGetRecommendationListQuery,
	useDeleteRecommendationDetailsMutation,
	useGetTokenQuery,
	useGetImageQuery,
} from '../../app/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import vegas from './images/vegas.jpg';
import './Userprofile.css';
import pfp from './images/pfp.png';

function Userprofile() {
	const navigate = useNavigate();
	const { data } = useGetRecommendationListQuery();
	const { data: account, isLoading } = useGetTokenQuery();
	const [deleteRec] = useDeleteRecommendationDetailsMutation();
	const login = useRef(true);

	useEffect(() => {
		if (login.current) {
			login.current = false;
		} else if (!isLoading && !account) {
			navigate('/');
		}
	}, [account, isLoading, navigate]);
	return (
		<div className="rec-background">
			<div id="title-header">
				<div className="overlay">
					<img id="profile-pfp" src={pfp} />
					<h4>
						{account &&
							account.full_name &&
							account.full_name.toUpperCase()[0] +
								account.full_name.substring(1)}
						's Recommendations
					</h4>
				</div>
			</div>
			<div className="rec-container">
				<div className="recommendations">
					{data?.map((item) => {
						const handleDelete = (e) => {
							e.preventDefault();
							deleteRec({ id: item.id });
						};
						console.log(item)
						return (
							<div key={item.id} className="col s12 m7">
								<div id="profile-rec-card" className="card">
									<img src={item.image} id="pfp"/>
									<div id="my-card-content">
										<span id="user-profile-card-title" className="card-title">
											{item.location}
										</span>
										<p className="interests-user-profile">
											{item.interest.charAt(0).toUpperCase() +
												item.interest.slice(1).toLowerCase()}
										</p>
									</div>
									<div id="button-space">
										<button
											id="details-btn"
											onClick={(e) => {
												navigate(`/recdetails/${item.id}`);
											}}
											className="btn waves-effect waves-light"
											type="submit"
											name="action"
										>
											Details
											<i className="material-icons right">details</i>
										</button>
										<button
											onClick={handleDelete}
											className="btn waves-effect red lighten-1"
											type="submit"
											name="action"
										>
											Delete
											<i className="material-icons right">delete_forever</i>
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Userprofile;

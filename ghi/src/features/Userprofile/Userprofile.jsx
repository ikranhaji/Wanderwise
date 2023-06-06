import {
	useGetRecommendationListQuery,
	useGetTokenQuery,
	useDeleteRecommendationDetailsMutation,
} from '../../app/apiSlice';
import { Link, useNavigate } from 'react-router-dom';
import vegas from './images/vegas.jpg';
import './Userprofile.css';

function Userprofile() {
	const navigate = useNavigate();
	const { data } = useGetRecommendationListQuery();
	const { data: account } = useGetTokenQuery();
	const [deleteRec, result] = useDeleteRecommendationDetailsMutation();

	return (
		<>
			<div className="rec-background">
				<div className="rec-container">
					<div className="recommendations">
						<div id="title-header">
							<h1>{} Recomendations</h1>
						</div>

						{data?.map((item) => {
							const handleDelete = (e) => {
								e.preventDefault();
								deleteRec({ id: item.id });
							};
							return (
								<div className="col s12 m7">
									<div className="card">
										<div>
											<img id="pfp" src={vegas} />
											<span className="card-title">{item.location}</span>
										</div>
										<div id="my-card-content">
											<p>
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
											{/*
														<Link to={`/recdetails/${item.id}`}>Details</Link> */}
											<button
												onclick={handleDelete}
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
		</>
	);
}

export default Userprofile;

{
	/* <NavLink to='/' onClick={handleDelete}>delete Account</NavLink> */
}

// const handleDelete = (data) => {
// 	console.log(account)
// 	logout()
// 	deleteAccount(data)
// }

import { useGetRecommendationDetailsQuery, useDeleteRecommendationDetailsMutation, useGetTokenQuery } from "../../app/apiSlice"
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Userprofile.css'
import BackBtn from "../BackButton/BackBtn";

function UserRecommendationDetails() {
	const navigate = useNavigate()
	const [deleteRec] = useDeleteRecommendationDetailsMutation()
	const {data: account, isFetching} = useGetTokenQuery()
	const handleDelete = (e) => {
		e.preventDefault();
		deleteRec({ id: itemId })
		navigate('/myprofile')

	};
	const params = useParams()
	const itemId = params.itemId
	const { data, isLoading } = useGetRecommendationDetailsQuery({ id: itemId });
	if (isLoading) return <div>Loading</div>
	const listItems = data.recommendations.split(/\d+/g).filter(item => item !== '')


	return (
		<>
			{isFetching ? (
				navigate('/')
			) : (
				<div className="my-container">
					<div className="my-card">
						<div className="details-image-container">
							<img id="details-images" src={data.image} />
						</div>
						<br></br>
						<div className="float-right">
							<span id="my-card-title" className="card-title">
								{data.location}
							</span>
						</div>
						<div id="details-page-content" className="card-content">
							<ol>
								{listItems.map((item, index) => (
									<li key={index}>{item.substring(1)}</li>
								))}
							</ol>
						</div>
						<div id="button-space">
							<BackBtn />
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
			)}
		</>
	);
}

export default UserRecommendationDetails;

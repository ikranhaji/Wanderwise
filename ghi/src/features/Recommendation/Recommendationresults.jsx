import { useSaveRecommendationMutation } from '../../app/apiSlice';
import './Recommendation.css';

function RecommendationResults(props) {
	const [save] = useSaveRecommendationMutation();
	const handleClick = (e) => {
		save({
			location: props.location,
			interest: props.interest,
			recommendations: props.data.join('').toString(),
		});
	};

	return (
		<>

				<div className="recomendation-text">
					<div>
						{props.data?.map((item, index) => {
							return <p key={index}>{item}</p>;
						})}
					</div>
					<div className="save">
						{props.data && props.data.length > 0 && (
							<button
								onClick={handleClick}
								class="btn waves-effect waves-light"
								type="submit"
								name="action"
							>
								Save
								<i class="material-icons right">add_circle_outline</i>
							</button>
						)}
					</div>{' '}
				</div>

		</>
	);
}
export default RecommendationResults;

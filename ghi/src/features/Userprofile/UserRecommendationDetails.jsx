import { useGetRecommendationDetailsQuery, useDeleteRecommendationDetailsMutation } from "../../app/apiSlice"
import { useParams, Link } from 'react-router-dom'
import './Userprofile.css'
import vegas from './images/vegas.jpg';

function UserRecommendationDetails () {
    const [ deleteRec, result ] = useDeleteRecommendationDetailsMutation()
    const handleDelete = (e) => {
		e.preventDefault();
        deleteRec({id: itemId})
    };
    const params = useParams()
    const itemId = params.itemId
    console.log(params)
    const { data, isLoading } = useGetRecommendationDetailsQuery({id: itemId});
    console.log(data);
    if (isLoading) return <div>Loading</div>



    return (
    <>
    <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img id="pfp" src={vegas} />
                        <span class="card-title">{data.location}</span>
                    </div>
                    <div class="card-content">
                    <p>{data.recommendations}</p>
                </div>
                    <div class="card-action">
                        </div>
                    </div>
                </div>
        <button onClick={handleDelete}><Link to='/myprofile'>Delete</Link></button>

    </>
    )
}

export default UserRecommendationDetails

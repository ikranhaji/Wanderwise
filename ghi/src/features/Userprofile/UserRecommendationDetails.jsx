import { useGetRecommendationDetailsQuery, useDeleteRecommendationDetailsMutation } from "../../app/apiSlice"
import { useParams, Link } from 'react-router-dom'

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
    <div>
    <table>
        <thead>
            <tr>
                <th>Interests</th>
                <th>Recommendations</th>
            </tr>
        </thead>
        <tbody>
            <tr key={ data.location }>
                <td>{data.interest}</td>
                <td>{data.recommendations}</td>
            </tr>
        </tbody>
    </table>
    <button onClick={handleDelete}><Link to='/myprofile'>Delete</Link></button>
    </div>
    </>
    )
}

export default UserRecommendationDetails

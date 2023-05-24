import { useGetRecommendationDetailsQuery } from "../../app/apiSlice"

function UserRecommendationDetails () {
    const [ details ] = useGetRecommendationDetailsQuery()
    console.log(details)


    return (
        <>
            <p></p>
        </>
    )
}

export default UserRecommendationDetails

import { useSaveRecommendationMutation } from "../../app/apiSlice";

function RecommendationResults(props) {
    const[save] = useSaveRecommendationMutation()
    const handleClick = (e) => {
        save({
            'location': props.location,
            'interest' : props.interest,
            'recommendations' :props.data.join("").toString()
        })

    }




    return (

        <>
        <div>
            {props.data?.map((item, index) => {
                return (
                    <p key={index}>{item}</p>

                );
            })}
        </div>
        <div>
            {props.data && props.data.length > 0 &&<button type="button" onClick={handleClick}>Save</button>}
        </div>
        </>
    );
}
export default RecommendationResults

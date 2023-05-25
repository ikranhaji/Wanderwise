import React, { useState }  from "react";
import { useCreateRecommendationMutation } from "../../app/apiSlice";
import RecommendationResults from "../../features/Recommendation/Recommendationresults"
import loading from "./loading.gif"

function RecommendationForm () {
    const [interest, setInterest] = useState('')
    const [location, setLocation] = useState('')
    const [create, result, isLoading] = useCreateRecommendationMutation()
    const handleSubmit =  async (e) => {
        e.preventDefault();

		setInterest('');
		setLocation('')

        console.log(await create({interest, location}))

	;
    }
	if (isLoading) return <img src={loading}/>

return (
   <>
		<div>
			<form onSubmit= {handleSubmit}className='recommendation-form'>
				<label htmlFor="interest">Interest</label>
				<input
					name="interest"
					value={interest}
					onChange={(e) => setInterest(e.target.value)}
				/>
				<label htmlFor="location"> Location </label>
				<input
                    type='text'
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
                <button type='submit'>Submit</button>
			</form>
			<RecommendationResults data={result.data} location={location} interest={interest} />

		</div>



   </>
)

}


export default RecommendationForm

import { useGetRecommendationListQuery, useGetTokenQuery } from "../../app/apiSlice"
import { Link } from "react-router-dom"
import vegas from './images/vegas.jpg';
import "./Userprofile.css"

function Userprofile () {
    const { data } = useGetRecommendationListQuery()
    const { data: account } = useGetTokenQuery()
    console.log(account)

return (
   <>
    <div className="recommendations">
      {data?.map((item) => {
                    return (

            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img id="pfp" src={vegas} />
                        <span class="card-title">{item.location}</span>
                    </div>
                    <div class="card-content">
                    <p>{item.interest}</p>
                </div>
                    <div class="card-action">
                    <Link to={`/recdetails/${item.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
   </>
  )
}


export default Userprofile



{/* <NavLink to='/' onClick={handleDelete}>delete Account</NavLink> */}

// const handleDelete = (data) => {
// 	console.log(account)
// 	logout()
// 	deleteAccount(data)
// }

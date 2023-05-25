import { useGetRecommendationListQuery } from "../../app/apiSlice"
import { Link } from "react-router-dom"

function Userprofile () {
    const { data } = useGetRecommendationListQuery()
    console.log(data)

return (
   <>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Locations</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => {
                    return (
                        <tr key={ item.id }>
                            <td><Link to={`/recdetails/${item.id}`}>{item.location}</Link></td>
                            <td>{item.id}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
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

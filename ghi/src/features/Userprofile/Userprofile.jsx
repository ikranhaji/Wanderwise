import { useGetRecommendationListQuery, useGetTokenQuery } from "../../app/apiSlice"
import { Link } from "react-router-dom"

function Userprofile () {
    const { data } = useGetRecommendationListQuery()
    const { data: account } = useGetTokenQuery()
    console.log(account)

return (
   <>
        <div>
        <h1>
            {/* {account.full_name} */}
        </h1>
        <table>
            <thead>
                <tr>
                    <th>Locations</th>
                    <th>Interests</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => {
                    return (
                        <tr key={ item.id }>
                            <td><Link to={`/recdetails/${item.id}`}>{item.location}</Link></td>
                            <td>{item.interest}</td>
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

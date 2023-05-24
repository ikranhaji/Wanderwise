import { useGetRecommendationListQuery } from "../../app/apiSlice"

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
                            <td>{item.location}</td>
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

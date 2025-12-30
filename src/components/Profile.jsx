import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

let Profile = () => {

    let { id } = useParams()

    let [post, setPosts] = useState({})


    useEffect(() => {
        (async () => {

            try {
                let { data } = await axios({
                    method: 'get',
                    url: 'https://jsonplaceholder.typicode.com/posts/' + id
                })
                setPosts(data);




                // navigate('/about')



            } catch (error) {
                console.error(error);

            }

        })()

    }, [])


    return (
        <>
            <div className="profile">
                <h1>Profile  {id}</h1>

                <h1>{post.body}</h1>
                <h3 style={{textAlign :'right' ,padding:'10px',margin:'10px'}}><Link to={`/detail/${id}`}> Details </Link></h3>
            </div>
        </>
    )
}


export { Profile }

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

let Detail = () => {

     let [post, setPosts] = useState({})
      let { id } = useParams()

    useEffect(() => {
        (async () => {

            try {
                let { data } = await axios({
                    method: 'get',
                    url: 'https://jsonplaceholder.typicode.com/posts/' + id
                })
                setPosts(data);
                       
            } catch (error) {
                console.error(error);

            }

        })()

    }, [])


    return (
        <>
           <h1>Details  {id}</h1>

            <h1>{post.body}</h1>
            <h3><Link to={'/'}> Back to Main Page </Link></h3>
        </>
    )
}
export { Detail }
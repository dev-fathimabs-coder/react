import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";





let Home = () => {
    // https://jsonplaceholder.typicode.com/posts


    let [post, setPosts] = useState([]);
    let [count, setCount] = useState(0);
    let navigate = useNavigate()

    useEffect(() => {
        (async () => {

            try {
                let { data } = await axios({
                    method: 'get',
                    url: 'https://jsonplaceholder.typicode.com/posts'
                })
                setPosts(data);



                // navigate('/about')



            } catch (error) {
                console.error(error);

            }

        })()

    }, [])

    let nextData = () => {
        if (count < post.length - 1) {
            setCount(count + 1);
        }

    }
    let previousData = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }



    return (
        <>
            

                {
                    post.map((obj, i) => {
                        return (
                            <div key={i} className="div">
                                <Link to={`/profile/${obj.id}`}>
                                    <h1>{obj.id}. {obj.title}</h1>
                                </Link>
                            </div>
                        )
                    })
                }


                {/* <button onClick={previousData} className='btn'>Previous</button>
                <button onClick={nextData} className='btn'>Next</button> */}

                {/* <Link to={'/profile/${}'}>click</Link> */}
            
        </>
    )
}

export { Home }
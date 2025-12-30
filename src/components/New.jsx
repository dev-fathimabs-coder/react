import { Link } from "react-router-dom"


let New = () => {
    return (
        <div className='card'>
            <h1 >Hello , World !!</h1>
            <p >welcome </p>
            <h2><Link to={'/home'}> Home </Link></h2>
        </div>
    )
}

export { New }
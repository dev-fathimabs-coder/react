function Card({ name, clr }) {


    return (
        <div className='card' style={{ background: clr }}>
            <h1 >Hello , World !!</h1>
            <p >welcome {name}</p>


        </div>
    )
}

export { Card }
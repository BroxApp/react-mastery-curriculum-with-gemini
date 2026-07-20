
function Card({children, title, type='info'}){
    return(
        <div className={`card card-${type}`}>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}
export default Card;
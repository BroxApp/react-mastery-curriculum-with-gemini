

function Button ({children, variant= "primary" , onClick}){
    return(
        <button onClick={onClick} className={`btn btn-${variant}`} >{children}</button>
    )
}
export default Button;



function Button (props){
    const baseStyle = "px-6 py-3 rounded-lg font-semibold";
    const primaryStyle = "bg-orange-500 hover:bg-orange-600 text-white shadow-lg";
    const secondaryStyle = "border border-gray-400 text-gray-200 hover:border-orange-500";

    const style = props.variant === "primary" ? primaryStyle : secondaryStyle;

    return(
        <button className={`${baseStyle} ${style}`}>{props.children}</button>
    )
}
export default Button;
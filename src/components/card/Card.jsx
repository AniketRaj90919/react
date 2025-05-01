import "./Card.css"
function Card ({children,onSubmit}){
    return(
        <form id="Card" onSubmit={onSubmit}>
        
        {children}          

        </form>
    )
}
export default Card;
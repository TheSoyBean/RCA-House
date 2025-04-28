
export default function Entry(props : any){
    return(
    <div>
        <h1>{props.place}</h1>
        <img src = {props.src} alt = "Profile Picture" />
        <p>{props.name}</p>
        <p>{props.points} Pts.</p>
        <img src = {props.house.src} alt = {props.house.alt} />
    </div>
    )
}
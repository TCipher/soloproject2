import react from "react"


export default function Journals(props){
    return(
        <div className="journal">
            <div>
                <img src={`../images/${props.image}`}  className="journal--img"/>
            </div>
            <div className="journal--stat">
                <div className="journal--span">
                    <span className="journal--info"></span>
                    <span className="journal--info">{props.location}</span>
                    <span className="journal--info  map" href={`${props. googleMapsUrl}`}>View on google Map</span>
                </div>
               
            
            <h2 className="journal--title">{props.title}</h2>
            <p className="bold journal--date">{props.startDate}-{props.endDate}</p>
            <p className="journal--description">{props.description}</p>
            </div>
        </div>
    )

}
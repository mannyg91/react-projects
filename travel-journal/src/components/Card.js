export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card-pic" src={props.imageUrl} />
            <div className="card-info">
                <div className="card-location">
                    <span className="card-location-name">{props.location}</span>
                    <a className="card-location-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-title">
                    {props.title}
                </div>
                <div className="card-dates">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="card-description">
                    {props.description}
                </div>
            </div>
        </div>
        
    )
}
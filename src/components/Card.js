export default function Card(props) {
    return (
            <div className="card">
                <img src={props.item.imageUrl} alt="sight" className="card-img" />
                <div className="card-text">
                    <div className="card-location">
                            <img src="./img/map-marker.png" alt="map marker" className="map-marker" />
                            <p className="country-name">{props.item.location.toUpperCase()}</p>
                            <a href={props.item.googleMapsUrl} className="maps-link" target="_blank" rel="noreferrer">View on Google Maps</a>
                    </div>
                    <h2 className="sight-title">{props.item.title}</h2>
                    <p className="visit-date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="sight-description">{props.item.description}</p>
                </div>
            </div>
    )
}
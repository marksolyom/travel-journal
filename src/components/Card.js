export default function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <img src={props.item.imageUrl} alt="sight" className="card-img" />
                <div className="card-text">
                    <div className="card-location">
                        <div className="country">
                            <img src="" alt="" className="location-marker" />
                            <p className="country-name">{props.item.location}</p>
                            <a href={props.item.googleMapsUrl} className="maps-link">View on Google Maps</a>
                        </div>
                    </div>
                    <h2 className="sight-title">{props.item.title}</h2>
                    <p className="visit-date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="sight-description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
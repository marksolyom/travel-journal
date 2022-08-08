export default function Card() {
    return (
        <div className="card">
            <div className="card-container">
                <img className="card-img" />
                <div className="card-text">
                    <div className="card-location">
                        <div className="country">
                            <img className="location-marker" />
                            <p className="country-name"></p>
                            <a className="maps-link"></a>
                        </div>
                    </div>
                    <h2 className="sight-title"></h2>
                    <p className="visit-date"></p>
                    <p className="sight-description"></p>
                </div>
            </div>
        </div>
    )
}
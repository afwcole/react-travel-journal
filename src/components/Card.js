import React from "react";

export default function Card(props) {
    // {
    //     title: "Mount Fuji",
    //     location: "Japan",
    //     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    //     startDate: "12 Jan, 2021",
    //     endDate: "24 Jan, 2021",
    //     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    //     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    // }
    return (
        <section className="card">
            <img className="card--image" src={props.item.imageUrl}/>
            <section className="card--content">
                <div className="card--location-info">
                    <img className="card--pin" src="../images/pin.png"/>
                    <span className="card--location">{props.item.location}</span>
                    <span><a className="card--map-link" href={props.item.googleMapsUrl}>View on Google Map</a></span>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h5 className="card--date">{`${props.item.startDate} - ${props.item.endDate}`}</h5>
                <p className="card--description">{props.item.description}</p>
            </section>
        </section>
    )
}
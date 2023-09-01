import React from "react"
// import starIcon from "../../public/images/icons8-star-30.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='soldout'>{badgeText}</div>}
            <img src={props.coverImg} alt='profile' className="card--image"/>
            <div className="card--stats">
                <img src='/images/icons8-star-30.png' alt='starIcon' className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

import React from "react"
// import starIcon from "../../public/images/icons8-star-30.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='soldout'>{badgeText}</div>}
            <img src={props.item.coverImg} alt='profile' className="card--image"/>
            <div className="card--stats">
                <img src='/images/icons8-star-30.png' alt='starIcon' className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

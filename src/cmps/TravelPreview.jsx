import React from 'react'

export function TravelPreview({ travel, onRemoveTravel }) {
    return (
        <article className='travel-preview'>
            <h4><i className="fa-solid fa-location-dot"></i> {travel.country}</h4>
            {/* <img src={travel.flag}/> */}
            <p>{travel.flag}</p>
            <h4>{travel.start}</h4>
            <h4>{travel.end}</h4>
            <h4><i className="fa-regular fa-pen-to-square"></i> {travel.note}</h4>
            <button onClick={() => onRemoveTravel(travel._id)} ><i className="fa-regular fa-trash-can"></i></button>
        </article>
    )
}

import React from 'react'
import { TravelPreview } from './TravelPreview'

export function TravelingList({ travels, onRemoveTravel}) {
  return (
    <div>
        {travels.map(travel =>
                <TravelPreview travel={travel} onRemoveTravel={onRemoveTravel}
                               key={travel._id} />
            )}
    </div>
  )
}

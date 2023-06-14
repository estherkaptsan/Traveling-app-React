import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { travelService } from '../services/travel.service'
import { loadTravels, removeTravel } from '../store/actions/travel.actions'
import { TravelingList } from './TravelingList'

export default function TravelingTable(props) {
    const travels = useSelector((storeState) => storeState.travelModule.travels)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTravels())
    }, [])

    const onRemoveTravel = useCallback(async (travelId) => {
        try {
            dispatch(removeTravel(travelId))
        } catch (error) {
            console.log('error:', error)
        }
    }, [])

    if (!travels) return <div>Loading...</div>
    return (
        <div>
            <TravelingList travels={travels} onRemoveTravel={onRemoveTravel} />
        </div>
    )
}

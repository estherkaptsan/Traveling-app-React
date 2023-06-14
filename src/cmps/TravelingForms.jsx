import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { travelService } from '../services/travel.service';
import { useNavigate } from 'react-router-dom';

export default function TravelingForm() {
    const [formValues, setFormValues] = useState({
        country: '',
        flag: '',
        start: '',
        end: '',
        note: '',
    });

    const [countryOptions, setCountryOptions] = useState([])
    const navigate = useNavigate()

    async function KcountryOptions(inputValue) {
        let options = await travelService.fetchCountryOptions(inputValue)
        console.log('option from form', options)
        return options
    }

    async function onSubmitForm(ev) {
        ev.preventDefault()

        try {
            const { country, start, end, note } = formValues

            const travel = {
                country,
                start,
                end,
                note,
            }

            await travelService.save(travel)
            navigate('/table')

            setFormValues({
                country: '',
                start: '',
                end: '',
                note: '',
            })
        } catch (error) {
            console.log('Error:', error)
        }
    }

    function handleInputChange(ev) {
        const { name, value } = ev.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    function handleCountryChange(selectedOption) {
        setFormValues((prevValues) => ({
            ...prevValues,
            country: selectedOption ? selectedOption.value : '',
        }))
    }

    return (
        <>
            <form action="" className="form" onSubmit={onSubmitForm}>
                <label htmlFor="country">Country:</label>
                <AsyncSelect
                    loadOptions={KcountryOptions}
                    onChange={handleCountryChange}
                    isClearable
                    isSearchable
                />
                <label htmlFor="start">Start date:</label>
                <input
                    type="date"
                    name="start"
                    id="start"
                    onChange={handleInputChange}
                    value={formValues.start}
                />
                <label htmlFor="end">End date:</label>
                <input
                    type="date"
                    name="end"
                    id="end"
                    onChange={handleInputChange}
                    value={formValues.end}
                />
                <label htmlFor="note">Note:</label>
                <input
                    type="text"
                    name="note"
                    id="note"
                    onChange={handleInputChange}
                    value={formValues.note}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

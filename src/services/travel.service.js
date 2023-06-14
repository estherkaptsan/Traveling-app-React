import { storageService } from "./storage.service"
import { makeId } from "./util.service"
import axios from 'axios';

export const travelService = {
    save,
    remove,
    query,
    fetchCountryOptions
}

let gDefaultTravels

const STORAGE_KEY = 'travels'
var gTravels = _loadTravels()

function query(filterBy) {
    let travelsToReturn = _loadTravels()

    return Promise.resolve([...travelsToReturn])
}

function remove(id) {
    const idx = gTravels.findIndex(travel => travel._id === id)
    gTravels.splice(idx, 1)

    storageService.store(STORAGE_KEY, gTravels)
    return Promise.resolve()
}

function save(travelToSave) {
    if (travelToSave._id) {
        const idx = gTravels.findIndex(travel => travel._id === travelToSave._id)
        gTravels.splice(idx, 1, travelToSave)
    } else {
        travelToSave._id = makeId()
        console.log(travelToSave)
        gTravels.push(travelToSave)
    }
    storageService.store(STORAGE_KEY, gTravels)
    return Promise.resolve(travelToSave)
}

function _loadTravels() {
    let travels = storageService.load(STORAGE_KEY)
    storageService.store(STORAGE_KEY, travels)
    return travels
}

async function fetchCountryOptions(inputValue) {
    try {
        const response = await axios.get(
            `https://restcountries.com/v3/name/${inputValue}`
        )

        const options = response.data.map((country) => ({
            value: country.name.common,
            label: country.name.common,
            flag: country.flag
        }))
        console.log(options)
        return options
    } catch (error) {
        console.error('Error fetching country options:', error)
    }
}
const container = document.getElementById('container')
const submit = document.getElementById('submit')
const locationInput = document.getElementById('locationInput')


async function callApi(location){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=95003b358bfe461088d134118230311&q=${location}`, {mode: 'cors'})
        const weatherData = await response.json()

        //console.log(weatherData)
        const condition = weatherData.current.condition.text
        const currentTemp = weatherData.current.feelslike_c
        

        //console.log(location, condition, currentTemp)
        return [location, condition, currentTemp]
    } catch (error) {
        console.log('Theres been an Error')
    }
}

function renderInfo(info){
    const locationName = document.createElement('h1')
    locationName.textContent = info[0]
    container.appendChild(locationName)

    const locationCondition = document.createElement('h2')
    locationCondition.textContent = info[1]
    container.appendChild(locationCondition)

    const locationCurrentTemp = document.createElement('h1')
    locationCurrentTemp.textContent = info[2]
    container.appendChild(locationCurrentTemp)

}


submit.addEventListener('click', async () => {
    
    let userLocation = locationInput.value
    console.log(userLocation)
    const info = await callApi(userLocation)

    

    console.log(info)

    locationInput.value = ''
    renderInfo(info)
})


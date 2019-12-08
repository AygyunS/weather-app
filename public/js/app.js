console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    if (location.length === 0) {
        messageTwo.textContent = ''
        messageOne.textContent = 'Please enter location!'

    } else {
        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''
        fetch('/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error);
                    messageOne.textContent = error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                    console.log(data.location)
                    console.log(data.forecast)
                }

            })
        })
    }

})
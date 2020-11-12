console.log('Client side javascript file is loaded!')

// fetch is asynchronous
// fetch('http://puzzle.mead.io/puzzle')
//     .then((response) => {
//         response.json()
//         .then((data) => {
//             console.log(`data: ${data}`)
//             console.log(data)
//         })
//     })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    console.log(location)

    if (location) {
        fetch('http://localhost:3000/weather?location=' + location)
        .then((response) => {
            response.json()
            .then((data) => {
                if (data.error) {
                    console.log(`Error: ${data.error}`)
                } else {
                    console.log(data.location)
                    console.log(data.forecast)
                }
            })
        })

    } else {
        console.log('You must enter a location!')
    }

    
})
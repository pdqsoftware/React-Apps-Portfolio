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

    



fetch('http://localhost:3000/weather?location=harpenden')
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

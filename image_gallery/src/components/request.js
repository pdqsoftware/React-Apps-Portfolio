
// getImages = (callback) => {
//     console.log('Callback')
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         console.log('Running event listener')
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })

//     request.open('GET', 'https://run.mocky.io/v3/525464b2-740b-40f8-9fb4-1cf0a6be1a6d')
//     request.send()
// }

// export default getImages
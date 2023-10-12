// function getVehicle(vehicle){
//     let vehicleDiv = document.createElement("div");
//             vehicleDiv.innerHTML = 
//             `h1>${vehicle.name}</h1>
//             h1>${vehicle.code}</h1>`       

// }
// function getVehicles() {
//     fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
//     .then(response => response.json())
//     .then(vehicleData => vehicleData.forEach(vehicle => getVehicle(vehicle)));
// }

// function initializeApp() {
//     getVehicles();
// }

// initializeApp();
document.addEventListener("DOMContentLoaded",()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        let vehicleDiv = document.getElementById("adviceText")
        console.log(data)
        vehicleDiv.innerHTML = 
        `<h1>${data.slip.advice}</h1>
        
        `;
    })
})

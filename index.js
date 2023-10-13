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
    const addCommentForm = document.querySelector("#addcomment");
    addCommentForm.addEventListener("submit",(e) => {
        e.preventDefault()
        let inputVal = e.target.leavecomment.value
        let comment = {
            feedback: inputVal
        }
        if(inputVal.length < 2){
            alert("Invalid comment")
            return
        }
        fetch("http://localhost:3000/feedback",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(comment => console.log(comment))

    })
    const addFeedbackForm = document.querySelector("#newfriend");
    addFeedbackForm.addEventListener("submit",(e) => {
        e.preventDefault()
        let inputVal = e.target.leavefeedback.value
        let leftfeedback = {
            feedbackname: inputVal
        }
        if(inputVal.length < 2){
            alert("Kindly input a longer feedback")
            return
        }
        fetch("http://localhost:3000/feedback",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(leftfeedback)
        })
        .then(res => res.json())
        .then(leftfeedback => console.log(leftfeedback))

    })
    
    fetch('http://localhost:3000/feedback')
         .then(response => response.json())
         .then(commentsData => {
             commentsData.forEach(listing => {
                const commentsList = document.getElementById("listofcomments")
                console.log(commentsData)
                commentsList.innerHTML = `
                <h1>${listing.feedback}</h1>
                `
                commentsList.appendChild(commentsData)
                
                
             });
         })
         
})




  
    






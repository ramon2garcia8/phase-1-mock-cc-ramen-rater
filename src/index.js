// write your code here
const ramenDiv = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const ramenForm = document.getElementById("new-ramen")

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = createRamenObject(e)
    postRamen(newRamen)
} )

function createRamenObject(e) {
    return {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,
        comment: e.target["new-comment"].value
    }
}

function postRamen(newRamen) {
    console.log(JSON.stringify(newRamen))
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newRamen)
    }
    fetch("http://localhost:3000/ramens", config)
    .then(res => res.json())
    .then(data => console.log(data))
}

function getRamenImgsFromServer() {
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(ramenArray => {
        ramenArray.forEach(ramenObj => {
            const ramenImg = document.createElement("img")
            ramenImg.addEventListener('click', () => {
                const detailName = ramenDetail.querySelector(".name")
                const detailRestaurant = ramenDetail.querySelector(".restaurant")
                const detailImg = ramenDetail.querySelector(".detail-image")
                detailName.textContent = ramenObj.name
                detailRestaurant.textContent = ramenObj.restaurant 
                detailImg.src = ramenObj.image
            })
            ramenImg.src = ramenObj.image
            ramenDiv.append(ramenImg)
        }) 
    })
}

getRamenImgsFromServer();
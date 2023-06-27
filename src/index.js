// write your code here
const ramenDiv = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")

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
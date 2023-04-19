const itemsImg = document.querySelectorAll("#carousel-img")

let newImgArray = [...itemsImg]

newFunction()

function newFunction() {
  newImgArray[1].classList.add("active")

  sliderLogic()

  function sliderLogic() {
    newImgArray.forEach(item => item.addEventListener("click", () => {
      for (let item of newImgArray) {
        item.classList.remove("active")
      }
      item.classList.add("active")

    }))
  }
}




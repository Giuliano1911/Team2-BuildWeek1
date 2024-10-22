const stars = document.querySelectorAll(".star")

let isClicked = false

stars.forEach((star, index) => {
  star.onmouseover = () => {
    if (!isClicked) {
      for (let i = 0; i <= index; i++) {
        stars[i].src = "./assets/img/star.svg"
      }
    }
  }

  star.onmouseout = () => {
    if (!isClicked) {
      for (let i = 0; i < stars.length; i++) {
        stars[i].src = "./assets/img/unselectedstar.svg"
      }
    }
  }

  star.onclick = () => {
    selectedIndex = index
    isClicked = true
    for (let i = 0; i < stars.length; i++) {
      stars[i].src =
        i <= selectedIndex
          ? "./assets/img/star.svg"
          : "./assets/img/unselectedstar.svg"
    }
  }
})

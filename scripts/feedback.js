const stars = document.querySelectorAll(".star")

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    for (let i = 0; i <= index; i++) {
      stars[i].src = "./assets/img/star.svg"
    }
  })

  star.addEventListener("mouseout", () => {
    for (let i = 0; i < stars.length; i++) {
      stars[i].src = "./assets/img/unselectedstar.svg"
    }
  })
})

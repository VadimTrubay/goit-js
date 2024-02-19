let allCategories = document.querySelectorAll(".item")
let allCategoriesLength = allCategories.length
console.log(`Number of categories: ${allCategoriesLength}`)

let items = allCategories.forEach(function (el) {
  console.log(`Category: ${el.querySelector("h2").innerHTML}`)
  console.log(`Elements: ${el.querySelectorAll("ul>li").length}`)
})
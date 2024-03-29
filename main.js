// toggle serach //
const btnSearch = document.querySelector(".btn-search");
const searchPlace = document.querySelector(".search-place");
const closeBtn = document.querySelector(".close")
btnSearch.addEventListener('click', () => {
    searchPlace.classList.add("show")
})
closeBtn.addEventListener('click', () => {
    searchPlace.classList.remove("show")
})

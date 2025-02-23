//responsive
function makeResponsive() {
    let screenWidth = window.innerWidth;

    // Example: Change font size based on screen width
    document.body.style.fontSize = screenWidth < 600 ? "14px" : "16px";

    // Example: Adjust navbar
    let navbar = document.getElementById("navbar");
    if (screenWidth < 768) {
        navbar.style.flexDirection = "column";
    } else {
        navbar.style.flexDirection = "row";
    }
}

// Run when the page loads
window.onload = makeResponsive;

// Run when window is resized
window.onresize = makeResponsive;

//navbar 
let icon = document.querySelector('.icon');
let ul = document.querySelector('ul');

icon.addEventListener('click', () => {
    ul.classList.toggle('showdata');
    console.log(ul);
});

//foodcard open
let foodcard = document.querySelectorAll(".foodcard");
foodcard.forEach(function (cards) {
    cards.addEventListener("click", () => {
        console.log(cards);
        let div = document.createElement("div");
        div.classList.add("card-details");
        div.innerHTML = `<i id="cross" class="fa-solid fa-xmark"></i><img src=${cards.firstElementChild.src} alt="">
        <h2>${cards.querySelector("h5").innerHTML}</h2>
        <p>${cards.lastElementChild.innerHTML}</p>`
        document.querySelector("body").appendChild(div);
        document.getElementById("cross").addEventListener("click", function(){
            div.remove()
        })
    })

});


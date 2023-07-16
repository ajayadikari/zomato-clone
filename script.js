const resCont = document.querySelector(".section-2");
const countriesCont = document.querySelector(".countriesSec");
for (let i = 0; i < 40; i++) {
    const ele = document.createElement("div");
    ele.classList.add("ele");
    const icon = `<i class="fa-solid fa-angle-right"></i>`;
    ele.innerHTML = "Hyderabad restaurant";
    ele.innerHTML += `${icon}`;
    resCont.append(ele);
    if (i <= 20) {
        const ele = document.createElement("div");
        const innerEle = document.createElement("div");
        innerEle.classList.add("innerEle");
        ele.classList.add("innerEleProperties");
        ele.classList.add("ele");
        const img = document.createElement("img");
        img.src = 'images/indian-flag.png';
        innerEle.append(img);
        innerEle.innerHTML += "India";
        ele.append(innerEle);
        ele.innerHTML += `${icon}`;
        countriesCont.append(ele);
    }
    ele.addEventListener("click", () => {
        window.location.href = "restaurant-page/restaurant-page.html";
    })
}



// location box popup 
const locBtn = document.querySelector(".locations-btn");
console.log("working ");
const locBox = document.querySelector(".loc-box");
locBox.classList.add("disable");
let locOn = false;
for (let i = 0; i < 24; i++) {
    const subBox = document.createElement("div");
    subBox.classList.add("sub-box");
    const imgEle = document.createElement("img");
    imgEle.src = 'images/indian-flag.png';
    subBox.append(imgEle);
    const p = document.createElement("p");
    p.innerHTML = `India`;
    subBox.append(p);
    locBox.append(subBox);
}

locBtn.addEventListener("click", () => {
    if(locOn) locOn = false;
    else locOn = true;
    locBox.classList.toggle("disable");
})



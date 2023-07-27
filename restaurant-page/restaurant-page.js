const foodLables = ['pizza', 'burger', 'cake', 'chicken', 'biriyani', 'fried rice', 'idlie', 'north indian', 'dosa', 'rolls', 'sandwitch', 'thali'];
const foodSlider = document.querySelector('.food-slider');
for (let i = 0; i < foodLables.length; i++) {
    const ele = document.createElement("div");
    ele.classList.add('item');
    const imgEle = document.createElement("img");
    if (foodLables[i] == 'chicken') imgEle.src = `../food-items/${foodLables[i]}.webp`;
    else imgEle.src = `../food-items/${foodLables[i]}.avif`;
    const pEle = document.createElement("p");
    pEle.innerHTML = `${foodLables[i]}`;
    ele.append(imgEle);
    ele.append(pEle);
    foodSlider.appendChild(ele);
}


// food slider

const slideBtn = document.querySelectorAll(".circles");
const leftSlideBtn = slideBtn[0];
leftSlideBtn.style.display = "none";
const rightSlideBtn = slideBtn[1];
let slidePos = 0;
let maxPos = -1 * foodLables.length * 17.3;
const slider = document.querySelector(".food-slider");
// console.log(slider.offsetWidth);
leftSlideBtn.addEventListener("click", () => {
    leftSlideBtn.classList.add("circles-activate");
    rightSlideBtn.classList.remove("circles-activate");
    if (slidePos < -1) {
        rightSlideBtn.style.display = "flex";
        slidePos += 17.3;
        console.log(slidePos);
        slider.style.transform = `translateX(${slidePos}%)`;
    }
    else {
        leftSlideBtn.style.display = "none";
    }
})
rightSlideBtn.addEventListener("click", () => {
    leftSlideBtn.classList.remove("circles-activate");
    rightSlideBtn.classList.add("circles-activate");
    if (Math.abs(slidePos) < Math.abs(maxPos + 118)) {
        leftSlideBtn.style.display = "flex";
        slidePos -= 17.3;
        console.log(Math.abs(slidePos) + " " + Math.abs(maxPos - 100));
        slider.style.transform = `translateX(${slidePos}%)`;
        // leftSlideBtn.classList.toggle("circles-activate");
    }
    else {
        rightSlideBtn.style.display = "none";
    }
})


//restaurant items page - 2
const restItems = document.querySelector(".restaurant-items");
for(let i = 0; i<15; i++){
    // const restSec = document.createElement("div");
    // restSec.classList.add("restaurants-section");
    // const restItemSec = document.createElement("div");
    // restItemSec.classList.add("restaurant-items-container");
    // const h1 = document.createElement("h1");
    // h1.innerHTML = `Delivery Restaurants in Ahmedabad`;
    // restItemSec.append(h1);
    // const restItems = document.createElement("div");
    const eachItem = document.createElement("div");
    eachItem.classList.add("each-item");
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box");
    const imgEle = document.createElement("img");
    imgEle.src = `../images/restaurants-img.avif`;
    const discBox = document.createElement("div");
    discBox.classList.add('disc-box');
    discBox.innerHTML = `50% OFF up to 100`;
    imgBox.append(imgEle);
    imgBox.append(discBox);
    eachItem.append(imgBox);
    const detBox = document.createElement("div");
    detBox.classList.add("det-box");
    const upper = document.createElement("div");
    upper.classList.add("upper");
    detBox.append(upper);
    const leftBox = document.createElement("div");
    leftBox.classList.add("leftbox");
    const h3 = document.createElement("h3");
    h3.innerHTML = "Biriyani";
    leftBox.append(h3);
    const p = document.createElement("p");
    p.innerHTML = `Gujarati, Street Food`;
    leftBox.append(p);
    upper.append(leftBox);
    const rightBox = document.createElement("div");
    rightBox.classList.add("rightbox");
    upper.append(rightBox);
    detBox.append(upper);
    const ratingBox = document.createElement("div");
    ratingBox.classList.add("rating-box");
    ratingBox.innerHTML = `4.4 <i class="fa-solid fa-star"></i>`;
    rightBox.append(ratingBox);
    const pEle = document.createElement("p");
    pEle.innerHTML = "&#x20B9 100 for one";
    rightBox.append(pEle);
    const hr = document.createElement("div");
    hr.classList.add("hr");
    detBox.append(hr);
    const pEle1 = document.createElement("p");
    pEle1.innerHTML = `Follows all Max Safety measures to ensure your food is safe`;
    detBox.append(pEle1);
    eachItem.append(detBox);
    restItems.append(eachItem);
}


// for footer 

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
    imgEle.src = '../images/indian-flag.png';
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



// q and a section dropdown elements

let qandaCont = document.querySelector(".qanda-cont");
for(let i = 0; i<4; i++){
    const ele = document.createElement("div");
    ele.classList.add("element");

    const ques = document.createElement("div");
    ques.classList.add("ques");
    const q = document.createElement("p");
    q.innerHTML = `Popular cuisines near me`;
    ques.append(q);
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-angle-down");
    const iconEle = document.createElement("div");
    iconEle.append(icon);
    ques.append(iconEle);
    ele.append(ques);
    const ans = document.createElement("div");
    ans.classList.add("ans");
    ans.classList.add("drop-up");
    ans.innerHTML = `Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meGujarati food near meIce Cream food near meItalian food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meSandwich food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me`;
    ele.append(ans);
    ele.addEventListener("click", ()=>{
        ans.classList.toggle("drop-up");
        icon.classList.toggle("rotate");
    })
    qandaCont.append(ele);
}




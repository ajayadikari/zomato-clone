const resCont = document.querySelector(".section-2");
const countriesCont = document.querySelector(".countriesSec");
for(let i = 0; i<40; i++){
    const ele = document.createElement("div");
    ele.classList.add("ele");
    const icon = `<i class="fa-solid fa-angle-right"></i>`;
    ele.innerHTML = "Hyderabad restaurant";
    ele.innerHTML += `${icon}`;
    resCont.append(ele);
    if(i <= 20){
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
}
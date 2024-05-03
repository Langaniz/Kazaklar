let page = 1;
let img = document.createElement("img");
img.classList.add("mainImg");

const MAİN = document.querySelector(".MAİN");

window.addEventListener('DOMContentLoaded', callProduct);
window.addEventListener('scroll', checkIfNearBottom);

function checkIfNearBottom() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    callProduct();
  }
}

//TODO--------------------------------------------------------- 

function callProduct() {
    fetch("https://farktorapi.com/new/?company=Fr-5500191&category=47170&page=" + page)
      .then(response => response.json())
      .then(data => {
        // let imgName = Array.isArray(data) ? data : [data];
        // ürnName.innerHTML = imgName[0].products[i].name;
        // ürnFiyat.innerHTML = imgName[0].products[i].priceMarket + " TL";

        // let imgSrc = Array.isArray(data) ? data : [data];
        // imgSrc = "https://images.farktorcdn.com/img/800x1200/Library/Upl/5500191/Product/" + imgSrc[0].products[i].photo;
        // img.src = imgSrc;
        addHTML(data?.products);
        page++;
        console.log(data)
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  }

const addHTML = async (products) => {
    products.map((perItem)=>{
        const img = document.createElement("img");
        img.classList.add("mainImg");
        img.src = "https://images.farktorcdn.com/img/800x1200/Library/Upl/5500191/Product/" + perItem.photo;
        
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("main_Div");
  
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("img_Div");
  
        const bottomDiv = document.createElement("div");
        bottomDiv.classList.add("bottom_Div");
  
        let ürnName = document.createElement("p");
        ürnName.classList.add("ürn_Name");
        ürnName.textContent =perItem.name;
  
        let ürnFiyat = document.createElement("p");
        ürnFiyat.classList.add("ürn_Fiyat");
        ürnFiyat.innerHTML=perItem.priceSale + " TL";
  
        let addBtn = document.createElement("button");
        addBtn.classList.add("add_Btn");
        addBtn.textContent = "Sepete Ekle";
  
        imgDiv.appendChild(img);
        mainDiv.appendChild(imgDiv);
        bottomDiv.appendChild(ürnName);
        bottomDiv.appendChild(ürnFiyat);
        bottomDiv.appendChild(addBtn);
        mainDiv.appendChild(bottomDiv);
        MAİN.append(mainDiv);
    })
};

function openNav() {
  document.getElementById("YanMenu").style.width = "200px";
}

function closeNav() {
  document.getElementById("YanMenu").style.width = "0";
}

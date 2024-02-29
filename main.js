
let img = document.createElement("img");
img.classList.add("mainImg");

const MAİN = document.querySelector(".MAİN");






const addHTML = async () => {
  for (let i = 0; i <= 19; i++) {
      const img = document.createElement("img");
      img.classList.add("mainImg");

      const mainDiv = document.createElement("div");
      mainDiv.classList.add("main_Div");
      mainDiv.classList.add("headline");

      let imgDiv = document.createElement("div");
      imgDiv.classList.add("img_Div");

      const bottomDiv = document.createElement("div");
      bottomDiv.classList.add("bottom_Div");

      let ürnName = document.createElement("p");
      ürnName.classList.add("ürn_Name");

      let ürnFiyat = document.createElement("p");
      ürnFiyat.classList.add("ürn_Fiyat");

      let addBtn = document.createElement("button");
      addBtn.classList.add("add_Btn");
      addBtn.textContent = "Sepete Ekle";

      imgDiv.appendChild(img);
      mainDiv.appendChild(imgDiv);
      bottomDiv.appendChild(ürnName);
      bottomDiv.appendChild(ürnFiyat);
      bottomDiv.appendChild(addBtn);
      mainDiv.appendChild(bottomDiv);
      MAİN.appendChild(mainDiv);

      fetch("https://farktorapi.com/new/?company=Fr-5500191&category=47170")
          .then(response => {
              return response.json();
          })
          .then(data => {
              let imgName = Array.isArray(data) ? data : [data];
              ürnName.innerHTML = imgName[0].products[i].name;
              ürnFiyat.innerHTML = imgName[0].products[i].priceMarket + " TL";

              let imgSrc = Array.isArray(data) ? data : [data];
              imgSrc = "https://images.farktorcdn.com/img/800x1200/Library/Upl/5500191/Product/" + imgSrc[0].products[i].photo;
              img.src = imgSrc;
          });
  }
};

addHTML();

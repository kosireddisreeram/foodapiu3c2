var cartarr=JSON.parse(localStorage.getItem("cartDetails")) || [];
let container1 = document.getElementById("cart")

cartarr.forEach(function(elem){


    let div1 = document.createElement("div")
    div1.setAttribute("id", "div1")
  
  let img1 = document.createElement("img")
  img1.src=elem.strMealThumb
  img1.setAttribute("id", "img1")

  let name1= document.createElement("p")
  name1.innerText=elem.strMeal

  let price1= document.createElement("p")
  price1.innerText=elem.price+" "+"Rs"
  div1.append(img1,name1, price1)
  container1.append(div1)

})
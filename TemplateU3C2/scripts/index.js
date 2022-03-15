let url='https://masai-food-api.herokuapp.com/api/meals/india';
async function getData(){
    try{
    let res= await fetch(url);
    let data= await res.json();
    console.log("data",data);
    appendproducts(data) 
}
catch(err){
    console.log(err);
}
}
getData(); 
function appendproducts(data){
        data[0].meals.forEach(function(elem){
        let div=document.createElement('div');
        div.setAttribute("id","div")
        let img= document.createElement('img');
        img.src=elem.strMealThumb;
        img.setAttribute("id",'image');
        let title=document.createElement('p');
        title.innerText=elem.strMeal;
        title.setAttribute("id","title")
        let id= document.createElement('p');
        id.innerText=elem.idMeal;
        id.setAttribute("id","desc");
        let price= document.createElement('p');
        price.innerText= elem.price;
        var cartarr=JSON.parse(localStorage.getItem("cart")) || [];

        price.setAttribute("id","price");
        var button = document.createElement('button');
        button.innerText='Add to cart'
        button.setAttribute("id","addtocart")
    
        button.addEventListener('click',function(){
            addtocart(elem);
        })
        div.append(img,title,id,price,button);
        document.querySelector("#menu").append(div);
        
        function addtocart(elem){
            cartarr.push(elem)
            elem.quant=1
            localStorage.setItem("cart", JSON.stringify(cartarr))
        } 
        document.getElementById("count").innerText=cartarr.length;

        
})
}


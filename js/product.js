var counter = document.getElementById("counter")
var counterOfProducts = 0
var id = window.location.search
id = id.substr(3)
function roo(){
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id).then(res => res.json()).then(res =>{
     console.log(res)   
    createProdut(res) })
}
roo()

function createProdut(res){
    var img = document.getElementById("pro-img")
    img.src = res.photos[0]
  /*CARD IMAGE*/
 
    var title = document.getElementById("pro-title")
    var t = document.createTextNode(res.name)
    title.appendChild(t)
    var brand = document.getElementById("pro-brand")
    brand.innerHTML = res.brand
    var price = document.getElementById("pro-price")
    price.innerHTML = `Rs ${res.price}`
    price.style.color = "#01d28e";
    var des = document.getElementById("pro-des")
    des.style.color = "#8c8c8c"
    des.innerHTML = res.description
    var images = document.getElementById("product-images")
    for(let i = 0; i< res.photos.length; i++){
        var im = document.createElement('img')
        im.className = "images"
        im.src = res.photos[i]
        images.appendChild(im)
    }
    var btn = document.getElementById("add")
    btn.onclick = function(){
        if(localStorage.getItem("id_"+res.id)){
            let obj = JSON.parse(localStorage.getItem("id_"+res.id));
            counterOfProducts = obj.count
        }
        var click = Number(counter.innerHTML)
        click++
        counter.innerHTML = click;
        counterOfProducts++
        var obj = {
              "id":res.id,
              "title":res.name,
              "thumbnail": res.preview,
              "amount": res.price,
              "count": counterOfProducts,
              "products":[]
        };

        fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/order",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },body: JSON.stringify({obj})
        }).then(response => response.json())
        .then((responseJson) =>{
            console.log(responseJson)
        } )
      .catch(error => console.log(error));
      window.localStorage.setItem("id_"+res.id, JSON.stringify(obj));
      console.log(localStorage)
      
    }


    var x = document.querySelectorAll(".images")
    x[0].classList.add("active")
        for(let j = 0; j < x.length; j++){
            x[j].onclick = function(){
                img.src = x[j].src
                var cur = document.querySelector(".active");
                cur.classList.remove("active");
                x[j].classList.add("active");
            } 
        }          
  }
  
  let totalCount = 0;
	for (let i=0;i<localStorage.length; i++) {
		let key = localStorage.key(i);
    let obj = JSON.parse(localStorage.getItem(key));
		totalCount += obj.count;
    var counter = document.getElementById("counter")
        counter.innerHTML = totalCount
	}
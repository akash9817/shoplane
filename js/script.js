
 function createCard(res){
   var link = document.createElement('a')
   link.id = "product"
   link.href= "product.html?p=" + res.id
  var mainDiv =  document.createElement('div')
 mainDiv.id="card-wrapper"
 /*CARD IMAGE*/

 var imgDiv =  document.createElement('div')
 imgDiv.className = "card-img"
 var imge = document.createElement('img')  
 imge.src = res.preview
 imgDiv.appendChild(imge)

 /*CARD FOOTER */
 var footerDiv = document.createElement('div')
 footerDiv.className = "card-footer"
 var des = document.createElement('h4')
 var d = document.createTextNode(res.name)
 des.appendChild(d)
 var brand = document.createElement('p')
var b = document.createTextNode(res.brand)
brand.appendChild(b)
var price = document.createElement('p')
price.style.color = "#42b883"
price.style.fontWeight = "bolder"
var p = document.createTextNode("Rs " + res.price)
price.appendChild(p)
 footerDiv.appendChild(des)
 footerDiv.appendChild(brand)
 footerDiv.appendChild(price)
   mainDiv.appendChild(imgDiv)
   mainDiv.appendChild(footerDiv)
   link.appendChild(mainDiv)
    return link
 }
 var card = document.getElementById('card-main')
 var acc = document.getElementById('acc-main')

 var arr =  fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((res) =>res.json())
 arr.then(res => {
        for(var i = 0; i < res.length; i++){
          if(!res[i].isAccessory){
            card.appendChild(createCard(res[i]))
          }else{
            acc.appendChild(createCard(res[i]))
          }
        }
   })
 
//  card.appendChild(createCard());
//  console.log(card)
 
$(document).ready(function(){
    $('.banner').slick({
        dots:true,
        arrows:false,
        autoplay:true
    });

    let totalCount = 0;
	for (let i=0;i<localStorage.length; i++) {
		let key = localStorage.key(i);
    let obj = JSON.parse(localStorage.getItem(key));
		totalCount += obj.count;
    var counter = document.getElementById("counter")
        counter.innerHTML = totalCount
	}

  });

function productCaller(){
    console.log("ggggggggg")
  }

 
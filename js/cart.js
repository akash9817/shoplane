let checkout = document.getElementById("checkout");
			var sum = 0;
			var totalCount = 0;
			for (let i=0;i<localStorage.length; i++) {
				let key = localStorage.key(i);
                let obj = JSON.parse(localStorage.getItem(key));
                console.log(obj)
				let left = document.getElementById("left-check");
				let item = document.createElement('div');
                item.className = "item";
                let leftImg = document.createElement('div')
                leftImg.className = "leftImg"
                let img = document.createElement('img');
                img.className = "cart-img"
                img.src = obj.thumbnail;
                leftImg.appendChild(img)
                item.appendChild(leftImg);
                let rightdet = document.createElement('div')
				let heading = document.createElement('h4');
				headingText = document.createTextNode(obj.title);
                heading.appendChild(headingText);
                rightdet.appendChild(heading)
				let countText = "";
				let countPar = document.createElement('p');
				countPar.style.margin = "4px"
				if (obj.count>1) {
					countText = document.createTextNode("x"+obj.count);
					countPar.appendChild(countText);
					rightdet.appendChild(countPar);
				}
				let par1 = document.createElement('p');
				par1.className="desc";
				par1.style.margin = "4px"
				let par1Text = document.createTextNode(obj.amount);
                par1.appendChild(par1Text);
                rightdet.appendChild(par1)
				item.appendChild(rightdet);
				left.appendChild(item);
				let total = document.querySelector('#total span');
				sum+=obj.amount*obj.count;
				total.innerHTML = sum;
				totalCount += obj.count;
			}
			let topCounter = document.getElementById("counter");
			if (totalCount > 0) {
				topCounter.innerHTML = totalCount;
			}
			let totalItems = document.getElementById('total-items');
			if (totalCount > 0) {
				totalItems.innerHTML += totalCount;
			}
console.log("sdfasfa")
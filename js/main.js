fetch("https://nageswarivasamsetti.github.io/ecommerous/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
     displayData(data)
})
    function displayData(info){
    	//var sampleElement=document.createElement("img");
    	//sampleElement.src="imgs/1.jpeg";
    	//sampleElement.classList.add("class1","class2","class3")
    	//sampleElement.classList.remove("class3")
    	var bodyElement=document.querySelector("body");
//    bodyElement.append(sampleElement)
    var row=document.createElement("selection")
    row.classList.add("row","justify-content-center")
    bodyElement.append(row) 
    info.mobiles.map(value =>{
    	var column=document.createElement("article")
    	column.classList.add("col-sm-10","col-md-6","col-lg-3");
    	row.append(column)
    //card
    var card=document.createElement("div");
    card.classList.add("card","mt-1")
    //card body
    var cardBody=document.createElement("div");
    cardBody.classList.add("card-body")
    //image
     var imageElement=document.createElement("img");
     imageElement.src=value.image;
     imageElement.classList.add("img-responsive")
     imageElement.alt=value.name;
     //name
     var name=document.createElement("h2")
     name.textContent=value.name;
     name.classList.add("text-center","text-info")
     //price
     var offerprice=document.createElement("p");
     offerprice.classList.add("text-warning","text-center")
      offerprice.textContent="price:₹"+value.offerprice;
     //offer price
     var price=document.createElement("p");
     price.classList.add("text-danger","text-center")
     price.innerHTML="<s>₹"+value.price+" /-<s>";
     //button
     var buttonParent=document.createElement("div");
     buttonParent.classList.add("d-grid","gap-2");
     
     var button=document.createElement("button");
     button.classList.add("btn","btn-block","btn-primary");
     	button.textContent="Add to cart"
     	buttonParent.append(button)


     cardBody.append(imageElement)
     cardBody.append(name)
     cardBody.append(offerprice)
     cardBody.append(price)
     cardBody.append(buttonParent)
     buttonParent.append(button)

          

     card.append(cardBody);
    column.append(card);

    })
}

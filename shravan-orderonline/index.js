var tabletData=JSON.parse(localStorage.getItem("tabletData"))

function searchdata(){
    console.log(event);
    if(event.key=="Enter"){
        document.querySelector("#showtablet").innerHTML="";
        var searchvalue=document.querySelector("#searchvalue").value;
        var searchdata=tabletData.filter(function(ele){
            return ele.name.includes(searchvalue);
            
        });
        searchdata.map(function(ele){
    
            var div=document.createElement("div");
            div.setAttribute("id","div1")
            var img=document.createElement("img");
            img.src=ele.img;
            img.setAttribute("id","tabletimg");
            var name=document.createElement("p");
            name.innerText=ele.name;
            name.setAttribute("id","tabletname");
            var div1=document.createElement("div");
            div1.setAttribute("id","tabletdiv");
            var price=document.createElement("p");
            price.innerText=ele.price;
            price.setAttribute("id","tabletprice");
            var strikeprice=document.createElement("p");
            strikeprice.innerText=ele.strikeOffprice;
            strikeprice.setAttribute("id","tabletstrike");
    
            var button= document.createElement("button");
            button.innerText="Add to Cart"
            button.setAttribute("id","tabletbutton");
            div.append(img,name,);
            div1.append(price,strikeprice,button)
             document.querySelector("#showtablet").append(div,div1);
         
        })
    }
   }

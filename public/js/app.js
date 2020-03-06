fetch('http://localhost:3000/allproducts').then((response)=>{
        response.json().then((res)=>{
            const largerwindow=document.getElementsByClassName("row")[0]
           

            res.data.forEach(element => {
                
                
                const newdiv=document.createElement("div")
                newdiv.className="col-md-3"
                newdiv.style="padding-bottom: 15px ; height:500px"
                const images=document.createElement("div")
                const desc=document.createElement("p")
                const button=document.createElement("button")
                button.id=element._id.toString()
                button.innerHTML="Add to Cart"
                button.onclick=function(){
                    fetch('http://localhost:3000/add_to_cart?id='+this.id)
                }
                    
                  
                const t = document.createTextNode(element.description);
                const p = document.createTextNode("Price:"+element.price);
                
                const path= '/img/'+ element.filename
                desc.appendChild(t)
                
                img = new Image()
                img.src = path
                images.appendChild(img)
                
                newdiv.appendChild(images)
                newdiv.appendChild(desc)
                newdiv.appendChild(p)
                
                newdiv.appendChild(button)
                largerwindow.appendChild(newdiv)
                
                
            });
        })
    })

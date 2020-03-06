fetch('http://localhost:3000/products_in_cart').then((response)=>{
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
                button.innerHTML="Remove from Cart"
                button.onclick=function(){
                    const a=self.location
                     fetch('http://localhost:3000/remove_from_cart?id='+this.id).then(()=>{
                         
                     })
                     a.reload(true)
                     
                 }
                    
                  
                const t = document.createTextNode(element.description);
                const p = document.createTextNode("Price:"+element.price);
                const m=new Date(element.updatedAt)
                
                
                
                const date=document.createTextNode("   Last Updated:"+ m.getDate() +"/" + m.getDay() +"/"+ m.getFullYear());
                
                const path= '/img/'+ element.filename
                desc.appendChild(t)
                img = new Image()
                img.src = path
                images.appendChild(img)
                
                newdiv.appendChild(images)
                newdiv.appendChild(desc)
                newdiv.appendChild(p)
                newdiv.append(date)
                newdiv.appendChild(button)
                
                largerwindow.appendChild(newdiv)
                
                
            });
            
        })
    })




const inp = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");


btn.addEventListener("click", function (e) {
    e.preventDefault()
    para.innerHTML =" "

    fetch("https://flagcdn.com/en/codes.json")
        .then(res => res.json())
        .then(data => {
        
        
                
            
                for(let key in data){
                    
                    if(data[key].toLowerCase()===inp.value){

                        let img = document.createElement("img");
                        img.src = "https://flagcdn.com/256x192/"+key+".png";
                        para.append(img)
                        inp.value=" "
                       
                }
                }


 
            
                


                
            

        })

            
         



})

const  country= document.querySelectorAll(".add-icon select")
const img= document.querySelector(".lang-img")
for(let select of country){
        for(code in countryList){
                let newOption = document.createElement("option");
                newOption.innerHTML=code;
                newOption.value=code;
                select.append(newOption);
        }

        select.addEventListener("change",(evt)=>{
                updateflag(evt.target);
        })
}

const updateflag=(Element)=>{
        let countryname = Element.value;
        let countrycode = countryList[countryname];
        let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`
        img.src = newSrc;
}


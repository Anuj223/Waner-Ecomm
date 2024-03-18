
        // const translate = require("google-translate-api")
        const country= document.querySelectorAll(".add-icon select")
        const img= document.querySelector(".lang-img")
        const selectlang = document.querySelectorAll(".nav-lang select")
        
        /*
*For Countries
*/ 
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
/**
 * For languages
*/
 const updatelang = (Element) =>{
         let lang = Element.value;
         let langcode = languages[lang];
         document.documentElement.lang = langcode;
         document.body.lang = langcode;
         //  document.styleSheets.lang = langcode;  
 }
for(let select of selectlang)
{
        for(lang in languages)
        {
                const newlang= document.createElement("option");
                newlang.innerHTML=lang;
                newlang.value=lang;
                select.append(newlang);
        }
        select.addEventListener("change",(evt)=>{
                updatelang(evt.target);
        })
}


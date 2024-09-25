// const { text } = require("express");

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
const images = [
        "head1.jpg",
        "head2.jpg",
        "head3.jpg",
        "head4.jpg",
        "head5.jpg",
        "head6.jpg"
    ];
    let currentIndex = 0;
    let interval;
    
    const updateImageAndText = () => {
        const herosection = document.querySelector('.hero-section');
        const nextImage = images[currentIndex];
        // console.log(nextImage);
        herosection.style.backgroundImage = `url("./images/${nextImage}")`;

    };
    
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImageAndText();
    };
    
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImageAndText();
    };
    
    document.getElementById('arrleft').addEventListener('click', () => {
        clearInterval(interval);
        prevSlide();
        interval = setInterval(nextSlide, 3000); // Restart interval
    });
    
    document.getElementById('arrright').addEventListener('click', () => {
        clearInterval(interval);
        nextSlide();
        interval = setInterval(nextSlide, 3000); // Restart interval
    });
    
    // Initialize with the first image
    updateImageAndText();
    
    // Start the automatic slide transition
    interval = setInterval(nextSlide, 4000);
    
    //Sidebar navigation
    const Sidebarnavigation = document.querySelector(".sidebar-container-navigation");
    const OpenSidebarButton = document.querySelector(".panel-all");
    const CloseSidebarButton = document.querySelector(".close-sidebar");
    
    OpenSidebarButton.addEventListener('click',()=>{
        Sidebarnavigation.style.display='flex';
});

        CloseSidebarButton.addEventListener('click',()=>{
                Sidebarnavigation.style.display='none'
        });

        Sidebarnavigation.addEventListener('click', (event) => {
                if (event.target === Sidebarnavigation) {
                    Sidebarnavigation.style.display = 'none';
                }
        });

// Footer
const backto = document.querySelector(".footer-panel");
console.log(backto);
backto.addEventListener("click",()=>{
        window.scrollTo({
                top:0,
                behavior: 'smooth'
        });
});
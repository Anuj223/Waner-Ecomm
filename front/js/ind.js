
const  country= document.getElementsByClassName("country-select")
// const countryList = require("./flag")
import { countryList } from "./flag";
for (let code in countryList)
{
        console.log(countryList[code]);
}
// for(let select of country)
// {
//         for(currflag in countryFlags)
//         {
//                 let newoption = document.createElement("option")
//                 newoption.innerText = currflag;
//                 newoption.value = currflag;
//                 if(select)
//                 {
//                         newoption.selected = "selected";
//                 }
//                 select.append(newoption)

//         }
// }
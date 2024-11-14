/*The app converts pressure in different scales. The scales
are pascal (pa), bar (unit mm Hg), atmosheric pressure (atm) and
pound per inch square (psi).*/
const paEl = document.getElementById("pa");
const barEl = document.getElementById("bar");
const atmEl = document.getElementById("atm");
const psiEl = document.getElementById("psi");

function cal(event){
    const currentVal =+ event.target.value;
switch(event.target.name){
        case "pa":
            barEl.value = (currentVal*(10**-5)).toFixed(4);
            atmEl.value = (currentVal*(9.86923*10**-6)).toFixed(4);
            psiEl.value = (currentVal*0.000145).toFixed(4);
            break;
        case "bar":
            paEl.value = (currentVal*(10**5)).toFixed(4); 
            atmEl.value = (currentVal*0.98692).toFixed(4);
            psiEl.value = (currentVal*14.503).toFixed(4);
        break;
        case "atm":
            paEl.value = (currentVal*101325).toFixed(4); 
            barEl.value = (currentVal*1.01325).toFixed(4);
            psiEl.value = (currentVal*14.6959).toFixed(4);
        break;
        case "psi":
            paEl.value = (currentVal*6894.76).toFixed(4); 
            barEl.value = (currentVal*0.0689476).toFixed(4);
            atmEl.value = (currentVal*0.068046).toFixed(4);
        break;
        default:
            break;

    }
    
    
}
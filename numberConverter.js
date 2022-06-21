const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to1 = document.getElementById("to-input1");
const to2 = document.getElementById("to-input2");
const error = document.getElementById("error");
const inputValue = document.getElementById("input-value");
const convert1 = document.getElementById("convert-value1");
const convert2 = document.getElementById("convert-value2");

let fromNS = "Decimal", toNS = "Binary";
function switchBase(from, to){
   switch (from) {
      case "Decimal":
            switch (to) {
               case "Binary": 
                  convert1.innerHTML = "Binary" + " Number";
                  convert2.innerHTML = "Hexadecimal" + " Number";
                  break;
               case "Hexadecimal": 
                  convert1.innerHTML = "Hexadecimal" + " Number";
                  convert2.innerHTML = "Binary" + " Number";
                  break;
            }
         break;
      case "Binary":
            switch (to) {
               case "Decimal": 
                  convert1.innerHTML = "Decimal" + " Number";
                  convert2.innerHTML = "Hexadecimal" + " Number";
                  break;
               case "Hexadecimal": 
                  convert1.innerHTML = "Hexadecimal" + " Number";
                  convert2.innerHTML = "Decimal" + " Number";
                  break;
            }
         break;
      case "Hexadecimal":
            switch (to) {
               case "Decimal": 
                  convert1.innerHTML = "Decimal" + " Number";
                  convert2.innerHTML = "Binary" + " Number";
                  break;
               case "Binary": 
                  convert1.innerHTML = "Binary" + " Number";
                  convert2.innerHTML = "Decimal" + " Number";
                  break;
            }
      break;
         };
}
fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   inputValue.innerHTML = "Enter " + fromNS + " number";
   switchBase( fromNS, toNS);

});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   switch (toNS) {
      case "Decimal":
            switch (fromNS) {
               case "Binary": 
                  convert1.innerHTML = "Decimal" + " Number";
                  convert2.innerHTML = "Hexadecimal" + " Number";
                  break;
               case "Hexadecimal": 
                  convert1.innerHTML = "Decimal" + " Number";
                  convert2.innerHTML = "Binary" + " Number";
                  break;
            }
         break;
      case "Binary":
            switch (fromNS) {
               case "Decimal": 
                  convert1.innerHTML = "Binary" + " Number";
                  convert2.innerHTML = "Hexadecimal" + " Number";
                  break;
               case "Hexadecimal": 
                  convert1.innerHTML = "Binary" + " Number";
                  convert2.innerHTML = "Decimal" + " Number";
                  break;
            }
         break;
      case "Hexadecimal":
            switch (fromNS) {
               case "Decimal": 
                  convert1.innerHTML = "Hexadecimal" + " Number";
                  convert2.innerHTML = "Binary" + " Number";
                  break;
               case "Binary": 
                  convert1.innerHTML = "Hexadecimal" + " Number";
                  convert2.innerHTML = "Decimal" + " Number";
                  break;
            }
      break;
         };

});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case "Binary":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (toNS) {
               case "Decimal": 
                  to1.value = parseInt(fromValue, 2);
                  to2.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Hexadecimal": 
                  to1.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  to2.value = parseInt(fromValue, 2);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Decimal":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": 
                  to1.value = Math.abs(fromValue).toString(2);
                  to2.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Hexadecimal": 
                  to1.value = Math.abs(fromValue).toString(16).toUpperCase();
                  to2.value = Math.abs(fromValue).toString(2);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Hexadecimal":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": 
                  to1.value = parseInt(fromValue, 16).toString(2);
                  to2.value = parseInt(fromValue, 16);
                  break;
               case "Decimal": 
                  to1.value = parseInt(fromValue, 16);
                  to2.value = parseInt(fromValue, 16).toString(2);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;
   }
});

function clear(){
   from.value = "";
   to1.value = "";
   to2.value = "";
};
document.getElementById("reset-button").addEventListener("click", function () {
   clear();
});

document.getElementById("swap-button").addEventListener("click", function () {
   var temp = fromNS;
   fromNS = toNS;
   toNS = temp;
   inputValue.innerHTML = "Enter " + fromNS + " number";
   var temp = fromSelected.selectedIndex;
   fromSelected.selectedIndex = toSelected.selectedIndex;
   toSelected.selectedIndex = temp;
   clear();
   switchBase(fromNS, toNS);
});


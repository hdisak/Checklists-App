
/*function functio() {
const item = document.getElementById("");
document.getElementById("to").appendChild(item);

};




 
document.getElementById("add").addEventListener("click", function() {
   // window.location.href = "add.html";

    const original = document.querySelectorAll(".listitem0");      // den div du vil kopiere
    const clone = original.cloneNode(true);                // true = kopier ALT indhold

     document.getElementById("box").appendChild(clone);  // tilføj under originalen

});*/
 


document.getElementById("add").addEventListener("click", function () {

    const original = document.querySelector(".listitem0");
    const clone = original.cloneNode(true);

    counter++;

    // find children
    const left = clone.querySelector(".leftbox");
    const right = clone.querySelector(".rightbox");
    const title = clone.querySelector("h2");

    // lav nye ID'er til klonen
    left.id = "grocery_" + counter + "_left";
    right.id = "grocery_" + counter + "_right";

    // ændr tekst så listerne får nyt navn
    title.textContent = "Grocery list " + counter;

    document.getElementById("box").appendChild(clone);
});
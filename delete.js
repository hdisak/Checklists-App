
import { title } from "./title.js";


document.getElementById("delete").addEventListener("click", function() {

    document.getElementById("grocery.1").remove();
    document.getElementById("grocery.2").remove();

    title();


});
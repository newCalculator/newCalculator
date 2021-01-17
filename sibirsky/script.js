let base64_input = document.querySelector("#base64_input");
let base64_output = document.querySelector("#base64_output");
let base64_input_btn = document.querySelector("#base64_input_btn");
let base64_output_btn = document.querySelector("#base64_output_btn");
let logs_block = document.querySelector("#logs_block");

//funcs
function pad(num, size) {
    let s = "0000000" + num;
    return s.substr(s.length - size);
}
function splitString(string, size) {
    var re = new RegExp('.{1,' + size + '}', 'g');
    return string.match(re);
}

//gElias
function decode(str) {
    
}

// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

function encode(str) {

}

//events
base64_input_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    decode(base64_input.value);

})
base64_output_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    encode(base64_output.value);
})
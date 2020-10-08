let space_input = document.querySelector("#space_input");
let space_0 = document.querySelector("#space_0");
let space_4 = document.querySelector("#space_4");
let space_6 = document.querySelector("#space_6");
let space_8 = document.querySelector("#space_8");
let space_11 = document.querySelector("#space_11");
let space_15 = document.querySelector("#space_15");

let space_input_btn = document.querySelector("#space_input_btn");

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

//ham
function spacer(str) {
    let splitted_str = str.split(' ');
    let full_string = "";
    space_4.value = "";
    space_6.value = "";
    space_8.value = "";
    space_11.value = "";
    space_15.value = "";
    for (let i = 0; i < splitted_str.length; i++) {
        full_string += splitted_str[i];
    }
    space_0.value = full_string;
    for (let i = 0; i < splitString(full_string, 4).length; i++) {
        space_4.value += splitString(full_string, 4)[i] + " ";
    }
    for (let i = 0; i < splitString(full_string, 6).length; i++) {
        space_6.value += splitString(full_string, 6)[i] + " ";
    }
    for (let i = 0; i < splitString(full_string, 8).length; i++) {
        space_8.value += splitString(full_string, 8)[i] + " ";
    }
    for (let i = 0; i < splitString(full_string, 11).length; i++) {
        space_11.value += splitString(full_string, 11)[i] + " ";
    }
    for (let i = 0; i < splitString(full_string, 15).length; i++) {
        space_15.value += splitString(full_string, 15)[i] + " ";
    }
}


// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

//events
space_input_btn.addEventListener('click', function () {
    spacer(space_input.value);
})
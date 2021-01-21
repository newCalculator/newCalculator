let space_input = document.querySelector("#space_input");
let space_0 = document.querySelector("#space_0");
let space_4 = document.querySelector("#space_4");

let space_input_btn = document.querySelector("#space_input_btn");

let logs_block = document.querySelector("#logs_block");

let space_range = document.querySelector("#space_range");

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
function spacer(str, step) {
    let splitted_str = str.split(' ');
    let full_string = "";
    space_4.value = "";
    for (let i = 0; i < splitted_str.length; i++) {
        full_string += splitted_str[i];
    }
    space_0.value = full_string;
    for (let i = 0; i < splitString(full_string, step).length; i++) {
        space_4.value += splitString(full_string, step)[i] + " ";
    }
}


// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

//events
space_input_btn.addEventListener('click', function () {
    if (space_range.value != '' && space_range.value > 0 && space_input.value != '') {
        spacer(space_input.value, space_range.value);
    } else {
        space_range.value = 1;
        spacer(space_input.value, space_range.value);
    }
})
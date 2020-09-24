let input_bin = document.querySelector("#input_bin");
let input_hex = document.querySelector("#input_hex");
let input_dec = document.querySelector("#input_dec");
let input_text = document.querySelector("#input_text");

let input_bin_btn = document.querySelector("#input_bin_btn");
let input_hex_btn = document.querySelector("#input_hex_btn");
let input_dec_btn = document.querySelector("#input_dec_btn");
let input_text_btn = document.querySelector("#input_text_btn");

//funcs
function pad(num, size) {
    let s = "0000000" + num;
    return s.substr(s.length - size);
}
function splitString(string, size) {
    var re = new RegExp('.{1,' + size + '}', 'g');
    return string.match(re);
}

//ascii
function dec(str) {
    splitted_str = str.split(' ');
    let result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 10) > 191) {
            result += String.fromCharCode(parseInt(splitted_str[i], 10) + 848);
        } else {
            result += String.fromCharCode(parseInt(splitted_str[i], 10));
        }
    }
    input_text.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 10) > 191) {
            result += (parseInt(splitted_str[i], 10)).toString(2) + " ";
        } else {
            result += (parseInt(splitted_str[i], 10)).toString(2) + " ";
        }
    }
    result = result.slice(0, -1);
    input_bin.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 10) > 191) {
            result += (parseInt(splitted_str[i], 10)).toString(16) + " ";
        } else {
            result += (parseInt(splitted_str[i], 10)).toString(16) + " ";
        }
    }
    result = result.slice(0, -1);
    input_hex.value = result.toUpperCase();
    result = "";
}

function bin(str) {
    splitted_str = str.split(' ');
    let result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 2) > 191) {
            result += String.fromCharCode(parseInt(splitted_str[i], 2) + 848);
        } else {
            result += String.fromCharCode(parseInt(splitted_str[i], 2));
        }
    }
    input_text.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 2) > 191) {
            result += (parseInt(splitted_str[i], 2)) + " ";
        } else {
            result += (parseInt(splitted_str[i], 2)) + " ";
        }
    }
    result = result.slice(0, -1);
    input_dec.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 2) > 191) {
            result += (parseInt(splitted_str[i], 2)).toString(16) + " ";
        } else {
            result += (parseInt(splitted_str[i], 2)).toString(16) + " ";
        }
    }
    result = result.slice(0, -1);
    input_hex.value = result.toUpperCase();
    result = "";
}

function hex(str) {
    splitted_str = str.split(' ');
    let result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 16) > 191) {
            result += String.fromCharCode(parseInt(splitted_str[i], 16) + 848);
        } else {
            result += String.fromCharCode(parseInt(splitted_str[i], 16));
        }
    }
    input_text.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 16) > 191) {
            result += (parseInt(splitted_str[i], 16)).toString(10) + " ";
        } else {
            result += (parseInt(splitted_str[i], 16)).toString(10) + " ";
        }
    }
    result = result.slice(0, -1);
    input_dec.value = result;
    result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        if (parseInt(splitted_str[i], 16) > 191) {
            result += (parseInt(splitted_str[i], 16)).toString(2) + " ";
        } else {
            result += (parseInt(splitted_str[i], 16)).toString(2) + " ";
        }
    }
    result = result.slice(0, -1);
    input_bin.value = result.toUpperCase();
    result = "";
}

function text(str) {
    splitted_str = str.split('');
    let add_nums = [];
    let result = "";
    for (let i = 0; i < splitted_str.length; i++) {
        add_nums[i] = splitted_str[i].charCodeAt(0);
        if (add_nums[i] > 191) {
            add_nums[i] = add_nums[i] - 848;
        }
    }
    for (let i = 0; i < add_nums.length; i++) {
        result += add_nums[i] + " ";
    }
    result = result.slice(0, -1);
    input_dec.value = result;
    result = "";
    for (let i = 0; i < add_nums.length; i++) {
        result += add_nums[i].toString(16).toUpperCase() + " ";
    }
    result = result.slice(0, -1);
    input_hex.value = result;
    result = "";
    for (let i = 0; i < add_nums.length; i++) {
        result += add_nums[i].toString(2) + " ";
    }
    result = result.slice(0, -1);
    input_bin.value = result;
    result = "";
}

// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

//events
input_bin_btn.addEventListener('click', function () {
    bin(input_bin.value);
})
input_hex_btn.addEventListener('click', function () {
    hex(input_hex.value);
})
input_dec_btn.addEventListener('click', function () {
    dec(input_dec.value);
})
input_text_btn.addEventListener('click', function () {
    text(input_text.value);
})
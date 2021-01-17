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
    let pointer = str.charAt(0);
    str = str.slice(1);
    let first_index = 0;
    let was_zero = false;
    let splitted_str = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 1 && !was_zero) {
            splitted_str += str.slice(i, i + 1) + " ";
        } else if (str.charAt(i) == 0 && !was_zero) {
            first_index = i;
            was_zero = true;
        } else if (str.charAt(i) == 1 && was_zero) {
            was_zero = false;
            splitted_str += str.slice(first_index, i + (i - first_index) + 1) + " ";
            i = i + (i - first_index);
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${pointer + ":" + splitted_str}</p>`;
    let bin_nums = splitted_str.split(' ');
    for (let i = 0; i < bin_nums.length; i++) {
        bin_nums[i] = parseInt(bin_nums[i], 2);
    }
    bin_nums.pop();
    splitted_str = "";
    for (let i = 0; i < bin_nums.length; i++) {
        splitted_str += bin_nums[i] + " ";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${pointer + ":" + splitted_str}</p>`;
    splitted_str = "";
    if (pointer == 1) {
        for (let i = 0; i < bin_nums.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < bin_nums[i]; j++) {
                    splitted_str += "1";
                }
            } else {
                for (let j = 0; j < bin_nums[i]; j++) {
                    splitted_str += "0";
                }
            }
            splitted_str += " ";
        }
    } else {
        for (let i = 0; i < bin_nums.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < bin_nums[i]; j++) {
                    splitted_str += "0";
                }
            } else {
                for (let j = 0; j < bin_nums[i]; j++) {
                    splitted_str += "1";
                }
            }
            splitted_str += " ";
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${splitted_str}</p>`;
    bin_nums = splitted_str.split(' ');
    splitted_str = "";
    for (let i = 0; i < bin_nums.length; i++) {
        splitted_str += bin_nums[i];
    }
    logs_block.innerHTML += '<br>';
    let letters__bin = splitString(splitted_str, 8);
    let hex_nums = "";
    logs_block.innerHTML += '<p style="margin-bottom:-10px">';
    for (let i = 0; i < letters__bin.length; i++) {
        hex_nums += parseInt(letters__bin[i], 2).toString(16).toUpperCase();
        logs_block.innerHTML += letters__bin[i] + " ";
    }
    logs_block.innerHTML += '</p>';
    hex_nums = splitString(hex_nums, 2);
    splitted_str = "";
    for (let i = 0; i < hex_nums.length; i++) {
        splitted_str += hex_nums[i] + " ";
    }
    splitted_str = "";
    for (let i = 0; i < hex_nums.length; i++) {
        if (parseInt(hex_nums[i], 16) > 191) {
            splitted_str += String.fromCharCode(parseInt(hex_nums[i], 16) + 848);
        } else {
            splitted_str += String.fromCharCode(parseInt(hex_nums[i], 16));
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${splitted_str}</p>`;
}

// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

function encode(str) {
    let splitted_str = str.split('');
    let add_spl_str = "";
    let add_nums = [];
    let pointer = 0;
    for (let i = 0; i < splitted_str.length; i++) {
        add_nums[i] = splitted_str[i].charCodeAt(0);
    }
    splitted_str = "";
    for (let i = 0; i < add_nums.length; i++) {
        add_spl_str += add_nums[i].toString(16).toUpperCase() + " ";
        splitted_str += add_nums[i].toString(16).toUpperCase();
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${add_spl_str}</p>`;
    splitted_str = parseInt(splitted_str, 16).toString(2);
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${splitted_str}</p>`;
    if (splitted_str.charAt(0) == '1') {
        pointer = 1;
    } else {
        pointer = 0;
    }
    for (let i = 0; i < add_nums.length; i++) {
        add_spl_str += add_nums[i].toString(16).toUpperCase() + " ";
        splitted_str += add_nums[i].toString(16).toUpperCase();
    }
    
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
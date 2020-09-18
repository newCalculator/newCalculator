let base64_input = document.querySelector("#base64_input");
let base64_output = document.querySelector("#base64_output");
let base64_input_btn = document.querySelector("#base64_input_btn");
let base64_output_btn = document.querySelector("#base64_output_btn");
let logs_block = document.querySelector("#logs_block");

//base
let base64_rawdata = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let base64_data = base64_rawdata.split('');

//funcs
function pad(num, size) {
    let s = "0000000" + num;
    return s.substr(s.length - size);
}
function splitString(string, size) {
    var re = new RegExp('.{1,' + size + '}', 'g');
    return string.match(re);
}

//b64
function b64_to_utf8(str) {
    let splitted_str = str.split('');
    let nums_arr = [];
    let end_zeros = 0;
    for (let i = 0; i < splitted_str.length; i++) {
        for (let j = 0; j < base64_data.length; j++) {
            if (splitted_str[i] === base64_data[j]) {
                nums_arr[i] = j;
            }
        }
        if (splitted_str[i] == "=") {
            end_zeros++;
        }
    }
    let nums_log_string = "";
    for (let i = 0; i < nums_arr.length; i++) {
        nums_log_string += nums_arr[i] + " "
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < nums_arr.length; i++) {
        nums_log_string += pad(nums_arr[i].toString(2), 6) + " ";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < nums_arr.length; i++) {
        nums_log_string += pad(nums_arr[i].toString(2), 6);
    }
    for (let i = 0; i < end_zeros; i++) {
        nums_log_string += "00";
    }
    let new_nums_arr = [];
    new_nums_arr = splitString(nums_log_string, 8);
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        if (new_nums_arr[i] != 0) {
            nums_log_string += new_nums_arr[i].toString(2) + " ";
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    let dec_nums_array = nums_log_string.split(' ');
    dec_nums_array.pop();
    nums_log_string = "";
    for (let i = 0; i < dec_nums_array.length; i++) {
        nums_log_string += parseInt(dec_nums_array[i], 2) + " ";
        dec_nums_array[i] = parseInt(dec_nums_array[i], 2);
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < dec_nums_array.length; i++) {
        if (dec_nums_array[i] > 191) {
            nums_log_string += String.fromCharCode(dec_nums_array[i] + 848);
        } else {
            nums_log_string += String.fromCharCode(dec_nums_array[i]);
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
}

// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

function utf8_to_b64(str) {
    let splitted_str = str.split('');
    let nums_log_string = "";
    let nums_arr = [];
    let end_zeros = 0;
    for (let i = 0; i < splitted_str.length; i++) {
        if (splitted_str[i].charCodeAt(0) - 848 > 191) {
            nums_arr[i] = splitted_str[i].charCodeAt(0) - 848;
            nums_log_string += nums_arr[i] + " ";
        } else {
            nums_arr[i] = splitted_str[i].charCodeAt(0);
            nums_log_string += nums_arr[i] + " ";
        }
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < nums_arr.length; i++) {
        nums_arr[i] = nums_arr[i].toString(2);
        nums_log_string += pad(nums_arr[i], 8);
    }
    let new_nums_arr = [];
    new_nums_arr = splitString(nums_log_string, 8);
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        nums_log_string += new_nums_arr[i].toString(2) + " ";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        nums_log_string += new_nums_arr[i].toString(2);
    }
    new_nums_arr = splitString(nums_log_string, 6);
    while (new_nums_arr[new_nums_arr.length - 1].length < 6) {
        end_zeros++;
        new_nums_arr[new_nums_arr.length - 1] += "00";
    }
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        nums_log_string += new_nums_arr[i] + " ";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        new_nums_arr[i] = parseInt(new_nums_arr[i], 2);
        nums_log_string += new_nums_arr[i] + " ";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
    nums_log_string = "";
    for (let i = 0; i < new_nums_arr.length; i++) {
        nums_log_string += base64_data[new_nums_arr[i]];
    }
    for (let i = 0; i < end_zeros; i++) {
        nums_log_string += "=";
    }
    logs_block.innerHTML += `<p style="margin-bottom:-10px">${nums_log_string}</p>`;
}

//events
base64_input_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    b64_to_utf8(base64_input.value);

})
base64_output_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    utf8_to_b64(base64_output.value);
})
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

function numberSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function decode(str) {
    let blocks = str.split('|');
    let answer = "";
    let start_element = 2;
    for (let k = 0; k < blocks[0].length / 2; k++) {
        answer += blocks[0].substring(0, 2);
        blocks[0] = blocks[0].substring(2);
        for (let i = 0; i < start_element; i++) {
            answer += blocks[i + 1].charAt(0);
            blocks[i + 1] = blocks[i + 1].substring(1);
        }
        for (let i = start_element - 1; i > 0; i--) {
            answer += blocks[i].charAt(0);
            blocks[i] = blocks[i].substring(1);
        }
        start_element += 2;
    }

    answer += blocks[0].substring(0, 2);

    base64_output.value = answer;
}

// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

function encode(str) {
    let char_arr = "";

    for (let i = 1; i <= str.length; i += 2) {
        if (str.charAt(numberSum(i) - 1) != '') {
            char_arr += str.charAt(numberSum(i) - 1);
        }
        if (str.charAt(numberSum(i)) != '') {
            char_arr += str.charAt(numberSum(i));
        }
    }

    let max = char_arr.length;

    let offset = 0;

    let isDone = false;

    while (!isDone) {
        for (let i = 0; i < max / 2; i++) {
            isDone = false;
            let l = numberSum(i * 2 + 1) + 1 + offset;
            let r = numberSum(i * 2 + 3) - 2 - offset;
            if (l < r) {
                if (l < str.length) {
                    char_arr += str.charAt(l);
                }
                if (r < str.length) {
                    char_arr += str.charAt(r);
                }
            } else if (l == r) {
                if (l < str.length) {
                    char_arr += str.charAt(l);
                }
                isDone = true;
            } else {
                isDone = true;
            }
        }
        offset++;
    }

    let answer = "";

    for (let i = 0; i < splitString(char_arr, 4).length; i++) {
        answer += splitString(char_arr, 4)[i] + " ";
    }

    base64_input.value = answer;
}

//events
base64_input_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    if (base64_input.value != '') {
        
        decode(base64_input.value);
    }
})
base64_output_btn.addEventListener('click', function () {
    logs_block.innerHTML = "";
    if (base64_output.value != '') {
        encode(base64_output.value);
    }
})
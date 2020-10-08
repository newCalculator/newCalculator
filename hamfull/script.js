let input_ham = document.querySelector("#input_ham");
let output_ham = document.querySelector("#output_ham");

let input_ham_btn = document.querySelector("#input_ham_btn");

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
function ham(str) {
    let strings_separated = str.split(' ');
    logs_block.innerHTML = "";
    logs_block.innerHTML += `<p style="margin-bottom:-10px">Без контрольных бит:</p>`;
    logs_block.innerHTML += `<p style="margin-bottom:-10px">`;
    for (let i = 0; i < strings_separated.length; i++) {
        let splitted_str = strings_separated[i].split('');
        for (let i = 0; i < 15; i++) {
            if (splitted_str[i] == null) {
                splitted_str[i] = 0;
            }
        }
        let security_nums = [];
        security_nums[0] = splitted_str[0];
        security_nums[1] = splitted_str[1];
        security_nums[2] = splitted_str[3];
        security_nums[3] = splitted_str[7];
        let new_security_nums = [0, 0, 0, 0];
        for (let i = 0; i < 15; i++) {
            if (i != 0 && i % 2 == 0 && splitted_str[i] == 1) {
                new_security_nums[0]++;
            }
        }
        for (let i = 0; i < 15; i++) {
            if (i - 1 != 1 && (i + 2) % 4 == 0 && splitted_str[i - 1] == 1) {
                new_security_nums[1]++;
            }
            if ((i + 2) % 4 == 0 && splitted_str[i] == 1) {
                new_security_nums[1]++;
            }
        }
        for (let i = 0; i < 15; i++) {
            if (i - 3 != 3 && (i + 2) % 8 == 0 && splitted_str[i - 3] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i - 2] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i - 1] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i] == 1) {
                new_security_nums[2]++;
            }
        }
        for (let i = 8; i < 15; i++) {
            if (splitted_str[i] == 1) {
                new_security_nums[3]++;
            }
        }

        for (let i = 0; i < 4; i++) {
            if (new_security_nums[i] % 2 == 0) {
                new_security_nums[i] = 0;
            } else {
                new_security_nums[i] = 1;
            }
        }

        let err = false;
        for (let i = 0; i < 4; i++) {
            if (security_nums[i] != new_security_nums[i]) {
                err = true;
            }
        }

        new_security_nums = [0, 0, 0, 0];

        //bababooey

        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0 && splitted_str[i] == 1) {
                new_security_nums[0]++;
            }
        }
        for (let i = 0; i < 15; i++) {
            if ((i + 2) % 4 == 0 && splitted_str[i - 1] == 1) {
                new_security_nums[1]++;
            }
            if ((i + 2) % 4 == 0 && splitted_str[i] == 1) {
                new_security_nums[1]++;
            }
        }
        for (let i = 0; i < 15; i++) {
            if ((i + 2) % 8 == 0 && splitted_str[i - 3] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i - 2] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i - 1] == 1) {
                new_security_nums[2]++;
            }
            if ((i + 2) % 8 == 0 && splitted_str[i] == 1) {
                new_security_nums[2]++;
            }
        }
        for (let i = 7; i < 15; i++) {
            if (splitted_str[i] == 1) {
                new_security_nums[3]++;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (new_security_nums[i] % 2 == 0) {
                new_security_nums[i] = 0;
            } else {
                new_security_nums[i] = 1;
            }
        }

        let sec_str = "";
        if (err) {
            for (let i = 3; i >= 0; i--) {
                sec_str += new_security_nums[i].toString();
            }
            sec_str = parseInt(sec_str, 2);
            if (splitted_str[sec_str - 1] == 0) {
                splitted_str[sec_str - 1] = 1;
            } else {
                splitted_str[sec_str - 1] = 0;
            }
        }
        let new_str = "";
        for (let i = 0; i < 15; i++) {
            new_str += splitted_str[i];
        }
        output_ham.value += new_str + " ";
        new_str = "";
        for (let i = 0; i < 15; i++) {
            if (i != 0 && i != 1 && i != 3 && i != 7) {
                new_str += splitted_str[i];
            }
        }
        logs_block.innerHTML += `${new_str} `;
    }
    logs_block.innerHTML += `</p>`;
}


// console.log(" ".charCodeAt(0));
// console.log(String.fromCharCode(174));

//events
input_ham_btn.addEventListener('click', function () {
    output_ham.value = "";
    ham(input_ham.value);
})
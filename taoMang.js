var number;
var isCheck = true;
var array = [];
function getNumbers () {
    while (isCheck) {
        array.push(input());
        check();
    }
    return array;
}

function input() {
    number = parseInt(prompt("Nhap so"));
    return number;
}

function check() {
    isCheck = prompt("Co nhap tiep khong? Y or N");
    if (isCheck === "Y") {
        isCheck = true;
    } else if (isCheck === "N") {
        isCheck = false;
    }
}

getNumbers();
console.log(array);



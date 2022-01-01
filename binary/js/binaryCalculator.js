
let operator="";
const RegOper = /^[0-9]+$/
let lastChar = "";
let totalCount = 0;
document.getElementById("result").innerText = totalCount;

const dis0 = () => {
    document.getElementById("input").innerText += "0"
}

const dis1 = () => {
    document.getElementById("input").innerText += "1"
}

const sum = () => {
    const value = document.getElementById("input").innerText;
    lastoperatorValidation(value, "+")
}

const sub = () => {
    const value = document.getElementById("input").innerText;
    // lastChar = value.slice(value.length - 1);

    lastoperatorValidation(value, "-")

}

const mul = () => {
    const value = document.getElementById("input").innerText;
    // lastChar = value.slice(value.length - 1)
    lastoperatorValidation(value, "*")
}

const div = () => {
    const value = document.getElementById("input").innerText;
    // lastChar = value.slice(value.length - 1)
    lastoperatorValidation(value, "/")
}
const cls = () => {
    totalCount = 0;
    document.getElementById("input").innerText = 0;
}


const equal = () => {
// console.log(operator, typeof operator ,typeof "/")
    totalCount = 0;
    const value = document.getElementById("input").innerText;
    const splitArr = value.split(operator);

    if (splitArr.length > 1) {
        const length = splitArr.length;
        // console.log({ length })
        for (let i = 0; i < length; i++) {
            if(i > 0){
                // console.log(operator)
                if(operator == "/"){
                    totalCount /= decToBinary(splitArr[i]);

                }else if(operator == "+"){
                    totalCount += decToBinary(splitArr[i]);

                }else if(operator == "-"){
                    totalCount -= decToBinary(splitArr[i]);

                }else if(operator == "*"){
                    // console.log("true")
                    totalCount *= decToBinary(splitArr[i]);
                }
                
            }else{
                totalCount = decToBinary(splitArr[i]);
                // console.log({totalCount})
            }
            
            // console.log({num : totalCount})
        }
    }
    let remCount = totalCount;
    let binary = "";
    while (remCount > 0) {
        binary = remCount % 2 + binary;
        remCount = Math.floor(remCount / 2);
    }
    if (remCount == 0) binary = "0" + binary;
    document.getElementById("result").innerText = binary;
}

const lastoperatorValidation = (val, func) => {
    if (val) {
        if (RegOper.test(val)) {
            document.getElementById("input").innerText += func
            operator = func;
        }
        // if (!operators.includes(val.forEach(elem=> elem))) {
        //     document.getElementById("input").innerText += func
        // }
    }
}

const decToBinary = (arr) => {
    if (arr) {
        // console.log({ arr })
        const splitNums = arr.split("");
        // console.log({ splitNums })
        let count = 0;
        for (let i = 0; i < splitNums.length; i++) {
            count += Math.pow(2, arr.length - 1 - i) * Number(arr[i]);
        }
        return count;
    }
}
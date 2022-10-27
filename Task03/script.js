var temperatures = function(t) {
        var output, input, conv_result, opposite;
        input = document.getElementById('temperature').value;
        if (t === "C") {
            conv_result = 1.8 * (+input) + 32;
            opposite = "F";
        } else {
            conv_result = (input - 32) / 1.8;
            opposite = "C";
        }
        if (conv_result % 1 !== 0) {
            console.log(conv_result % 1);
            conv_result = conv_result.toFixed(4);
        }
        if (input || input === "0") {
            output = input + " \u00b0" + t + " is equal to " + conv_result + " \u00b0" + opposite;
        } else {
            output = "error: number expected";
        }

        document.getElementById('output').innerHTML = output;
    }
document.getElementById('ctof').addEventListener('click', function(){temperatures('C');})
document.getElementById('ftoc').addEventListener('click', function(){temperatures('F');})

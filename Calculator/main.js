B = document.getElementById("application")

let input_a = document.createElement("input");
input_a.setAttribute("id", "input_a");
B.append(input_a);

let input_b = document.createElement("input");
input_b.setAttribute("id", "input_b");
B.append(input_b);

let add = (a, b) => {
    return parseFloat(a) * parseFloat(b);
}

let payment = () => {
    let in_a = document.getElementById("input_a").value;
    let in_b = document.getElementById("input_b").value;
    let res = document.getElementById("result");
    res.innerText = add(in_a, in_b);
}

let result_button = document.createElement("button");
result_button.innerText = "=";
result_button.onclick = payment;
B.append(result_button);

let result_ti = document.createElement("answer");
result_ti.setAttribute("id", "result");
result_ti.innerText = 'Null';
B.append(result_ti)

test_arrays = () => {
    let lst = [
        "чупапипи",
        "муняня",
        "chill out",
        "hipe"
    ];
    lst.push("last elem");

    for (i = 0; i < lst.length; i++) {
        let mas_elem = document.createElement("h2")
        let rnd_value = Math.round(Math.random() * 16777216).toString(16);
        let color = "color:#" + rnd_value;
        mas_elem.setAttribute("style", color);
        mas_elem.innerText = i + ': ' + lst[i];
        B.append(mas_elem)
    }
}
test_arrays()

_root_ = document.getElementById("application")
console.log(_root_);

for (let doge_number = 0; doge_number < 5; doge_number++) {
    let doge_img = document.createElement("img")
    doge_img.setAttribute("src", "img/doge.jpg");
    doge_img.setAttribute("alt", "Doge picture");
    doge_img.setAttribute("id", "doge_" + doge_number);
    console.log(doge_img);

    _root_.append(doge_img)
}
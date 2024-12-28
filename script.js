function pick(val) {
    console.log(val)
    document.getElementById("input-id").value += val
}

function clr() {

    document.getElementById('input-id').value = '';
}
function solve() {
    console.log('Click me   ')
    let x = document.getElementById('input-id').value;
    let y = eval(x)
    document.getElementById('input-id').value = y;
}
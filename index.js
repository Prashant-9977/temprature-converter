document.getElementById('converter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    calculateTemperature();
});

function calculateTemperature() {
    const temp = document.getElementById('temp').value;
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (temp * 9/5) + 32;
        document.getElementById('result').innerText = `The temperature is ${result.toFixed(2)} Fahrenheit`;
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById('result').innerText = `The temperature is ${result.toFixed(2)} Celsius`;
    }
}


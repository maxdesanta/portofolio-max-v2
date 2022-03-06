// kalkulator

console.log('Hello, ini halaman kalkulator');

const kalkulator = {
    angkaDisplay: '0',
    operator: null,
    angkaPertama: null,
    tungguAngkaKedua: false
};

// membuat fungsi update display
function updateDisplay() {
    document.querySelector('#displayNumber').innerText = kalkulator.angkaDisplay;
}

// membuat reset display kalkulator
function resetKalkulator() {
    kalkulator.angkaDisplay = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.tungguAngkaKedua = false;
}

/* function inputDigit(digit) {
    kalkulator.angkaDisplay += digit;
    updateDisplay(digit);
}

inputDigit(1); */

// membuat fungsi input angka
function inputDigit(digit) {
    if (kalkulator.angkaDisplay === '0') {
        kalkulator.angkaDisplay = digit;
    } else {
        kalkulator.angkaDisplay += digit;
    }
}

// membuat fungsi input angka menjadi negatif / positif 

function inverseAngka() {
    if (kalkulator.angkaDisplay === '0') {
        return;
    }
    kalkulator.angkaDisplay = kalkulator.angkaDisplay * -1;
}

function hitungKalkulasi() {
    // jika kondisi angka pertama / operator belum ada
    if (kalkulator.angkaPertama == null || kalkulator.operator.null) {
        alert('Masukkan angka terlebih dahulu');
        return;
    }

    let hasil = 0;
    if (kalkulator.operator === '+') {
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDisplay);
    } else {
        hasil = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angkaDisplay);
    }
    kalkulator.angkaDisplay = hasil;
}

function gunakanOperator(operator) {
    if (!kalkulator.tungguAngkaKedua) {
        kalkulator.operator = operator;
        kalkulator.tungguAngkaKedua = true;
        kalkulator.angkaPertama = kalkulator.angkaDisplay;

        // mengatur ulang angka display supaya button selanjutnya dimulai dari angka pertama lagi
        kalkulator.angkaDisplay = '0';
    } else {
        alert('operator sudah ditetapkan');
    }
}

// memiilih elemen button dalam kalkulator html
const buttons = document.querySelectorAll('.button');

// looping buttons dengan fungsi setiap button

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang di klik 
        const target = event.target;

        //jika button clear kalkulator diklik
        if (target.classList.contains('clear')) {
            resetKalkulator();
            updateDisplay();
            return;
        }

        // jika button +/- diklik menghasilkan angka negatif atau positif

        if (target.classList.contains('negative')) {
            inverseAngka();
            updateDisplay();
            return
        }

        // jika button = atau sama dengan diklik untuk membandingkan hasil

        if (target.classList.contains('equals')) {
            hitungKalkulasi();
            updateDisplay();
            return
        }
        // jika button operator  +, -, *, / diklik

        if (target.classList.contains('operator')) {
            gunakanOperator(target.innerText);
            return;
        }

        // masukkan angka
        inputDigit(target.innerText);
        updateDisplay();
    })
}
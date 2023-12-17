
const goCalculate = () => {
    const inputText = +document.querySelector("#netMoney").value;
    const aufschlagen = document.querySelector("#aufschlag").checked;
    const abziehen = document.querySelector("#abziehen").checked;

    const nineteenPro = document.querySelector("#nineteenPercent").checked;
    const sevenPro = document.querySelector("#sevenPercent").checked;

    const resultTax = document.querySelector(".resultTaxCosts");
    const resultBrutto = document.querySelector(".resultBruttoCosts");

    const nineteen = inputText * 0.19;
    const seven = inputText * 0.07;

    // Mehrertsteuer drauf
    const calAmountNine = inputText * (1 + 0.19);
    const calAmountSeven = inputText * (1 + 0.07);

    // Mehrwertsteuer abziehen
    const calNettoBetragMinus = inputText / (1 + 0.19);
    const calNettoBetragMinus2 = inputText / (1 + 0.07);

    if (aufschlagen && nineteenPro) {
        resultTax.innerHTML = nineteen.toFixed(2);
        resultBrutto.innerHTML = calAmountNine.toFixed(2);
    } else if (aufschlagen && sevenPro) {
        resultTax.innerHTML = seven.toFixed(2);
        resultBrutto.innerHTML = calAmountSeven.toFixed(2);
    }

    if (abziehen && nineteenPro) {
        resultTax.innerHTML = nineteen.toFixed(2);
        resultBrutto.innerHTML = calNettoBetragMinus.toFixed(2);
    } else if (abziehen && sevenPro) {
        resultTax.innerHTML = seven.toFixed(2);
        resultBrutto.innerHTML = calNettoBetragMinus2.toFixed(2);
    }
}






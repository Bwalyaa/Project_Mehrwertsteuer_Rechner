const goCalculate = () => {
    const inputText = +document.querySelector("#netMoney").value
    const aufschlagen = document.querySelector("#aufschlag").checked
    const abziehen = document.querySelector("#abziehen").checked
    
    const nineteenPro = document.querySelector("#nineteenPercent").checked
    const sevenPro = document.querySelector("#sevenPercent").checked

    const resultTax = document.querySelector(".resultTaxCosts")
    const resultBrutto = document.querySelector(".resultBruttoCosts")

    // Mehrertsteuer drauf
    const calAmountNine = (inputText * 0.19).toFixed(2)
    const calAmountSeven = (inputText * 0.07).toFixed(2) // kann scheinbar nicht 0,07 schreiben
    const calBruttoBetragPlus = (inputText + calAmountNine);
    const calBruttoBetragPlus2 = (inputText + calAmountSeven)

    // Mehrwersteuer abziehe
    // const calAmountNinePlus = (inputText * 0,19); // 
    // const calculateAmountSevenPlus = (inputText * 0,07); // diese beiden codes bleiben dieselben
    const calNettoBetragMinus = (inputText - calAmountNine)
    const calNettoBetragMinus2 = (inputText - calAmountSeven)

    if (aufschlagen && nineteenPro) {
        resultTax.innerHTML = calAmountNine
        resultBrutto.innerHTML = calBruttoBetragPlus

    } else if (aufschlagen && sevenPro)
        resultTax.innerHTML = calAmountSeven
        resultBrutto.innerHTML = calBruttoBetragPlus2

    if (abziehen && nineteenPro) {
        resultTax.innerHTML = calAmountNine
        resultBrutto.innerHTML = calNettoBetragMinus

    } else if (abziehen && sevenPro)
        resultTax.innerHTML = calAmountSeven
        resultBrutto.innerHTML = calNettoBetragMinus2
}







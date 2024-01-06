
let btn = document.querySelector("#click");
btn.addEventListener("click", () => {
    const hexNumber = [0,1,2,4,5,6,7,8,8,9,"A","B","D","E","F"];
    let hexCode = "";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumber.length);
        hexCode += hexNumber[randomIndex];
    };

    console.log(hexCode);

    let bodyColor = document.querySelector("#hex-color");
    document.querySelector("span").innerHTML = "#" + hexCode;

    bodyColor.style.background ="#" + hexCode;


    
    console.log(hexCode);
});
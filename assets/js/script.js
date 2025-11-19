let lengthOfPass=document.getElementById("Myselectlength");
let lowerLetterInPass=document.getElementById("lowercase");
let upperLetterInPass=document.getElementById("uppercase");
let numberInPass=document.getElementById("number");
let specialCharInPass=document.getElementById("specialcharacter");
let generatePass=document.getElementById("generatePass");
let showResult=document.getElementById("inputShowResult");
let copyPassBtn=document.getElementById("copyPass");
let p=document.createElement("p");
let div=document.getElementById("div");
let showStrength=document.getElementById("para");
let passStrengthBtn=document.getElementById("passStrength");

let numberArray=["0","1","2","3","4","5","6","7","8","9"]
let specialcharacterArray =["!","@","#","$","%","^","&","*"]
let upperLetterArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerLetterArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
generatePass.onclick=()=>{
    showStrength.textContent="";
    div.innerHTML="";
    let password1="";
    let lengthOfPassInNum=Number(lengthOfPass.value)
    if(lengthOfPass.value!="#"){
        for(let i=0;i<=lengthOfPass.value;i++){
            let number=Math.floor(Math.random()*10)
            let upperLetterIndex=Math.floor(Math.random()*upperLetterArray.length)
            let lowerLetterIndex=Math.floor(Math.random()*lowerLetterArray.length)
            let specialCharIndex=Math.floor(Math.random()*specialcharacterArray.length)

            if(lowerLetterInPass.checked){
                console.log(password1.length!=lengthOfPass,password1.length <= lengthOfPassInNum);
                if(password1.length<lengthOfPassInNum){
                    password1+=lowerLetterArray[lowerLetterIndex]
                }
                else{
                    console.log("pass",password1.length);
                    break;
                }
            }
            if(upperLetterInPass.checked){
                if(password1.length<lengthOfPassInNum){
                    password1+=upperLetterArray[upperLetterIndex]
                }
                else{
                    console.log("pass",password1.length);
                    break;
                }
            }
            if(specialCharInPass.checked){
                if(password1.length<lengthOfPassInNum){
                    password1+=specialcharacterArray[specialCharIndex]
                }
                else{
                    console.log("pass",password1.length);
                    break;
                }
            }
            if(numberInPass.checked){
                if(password1.length<lengthOfPassInNum){
                    password1+=numberArray[number]
                }
                else{
                    console.log("pass",password1.length,password1);
                    break;
                }
            }
        }
    }
    else{
        alert("Please Select The Password Length")
    }
    if(password1.length===0){
        alert("Please checked the criteria")
    }
    showResult.value=password1
    localStorage.setItem("password",password1);
}

copyPassBtn.onclick=()=>{
    let pass=localStorage.getItem("password");
    navigator.clipboard.writeText(pass)
    .then(()=>{
        console.log(`Successful copied`);
        p.textContent=`Successful copied`
        div.appendChild(p);
    })
    .catch(err=>{
        console.log(`Error during coping ${err}`);
    })
}


passStrengthBtn.onclick=()=>{
    let pass=localStorage.getItem("password");
    let lowerChar=0
    let upperChar=0
    let integer=0
    let specialChar=0
    for(let i=0;i<pass.length;i++){
        if(pass[i]>=0 && pass[i]<=9){
            integer+=1
        }
        if(pass[i]>="A" && pass[i]<="Z"){
            upperChar+=1
        }
        if(pass[i]>="a" && pass[i]<="z"){
            lowerChar+=1
        }
        if(pass[i]==="#" || pass[i]==="!"||pass[i]==="@"||pass[i]==="$"||pass[i]==="%"||pass[i]==="^"||pass[i]==="&"||pass[i]==="*"){
            specialChar+=1
        }
    }
    if(pass.length>12){
        if(integer!=0 && upperChar!=0 && lowerChar!=0 && specialChar!=0){
            showStrength.textContent="Complex"
        }
        else if((specialChar!=0 && integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Complex"
        }
        else if((specialChar!=0 || integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Complex"
        }
        else if((specialChar!=0 || integer !=0) || (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Medium"
        }
        else{
            showStrength.textContent="Medium"
        }
    }
    if(pass.length>=7 &&pass.length<=12){
        if(integer!=0 && upperChar!=0 && lowerChar!=0 && specialChar!=0){
            showStrength.textContent="Medium"
        }
        else if((specialChar!=0 && integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Medium"
        }
        else if((specialChar!=0 || integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Normal"
        }
        else if((specialChar!=0 || integer !=0) || (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Normal"
        }
        else{
            showStrength.textContent="Low"
        }
    }
    if(pass.length<=6){
        if(integer!=0 && upperChar!=0 && lowerChar!=0 && specialChar!=0){
            showStrength.textContent="Normal"
        }
        else if((specialChar!=0 && integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Low"
        }
        else if((specialChar!=0 || integer !=0) && (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Low"
        }
        else if((specialChar!=0 || integer !=0) || (upperChar!=0 || lowerChar!=0)){
            showStrength.textContent="Very Low"
        }
        else{
            showStrength.textContent="Very Low"
        }
    }
}
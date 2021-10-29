function plus () {
    let one = parseInt(document.getElementById('one').value);
    let two = parseInt(document.getElementById('two').value);
    let three = parseInt(document.getElementById('three').value);
    let four = parseInt(document.getElementById('four').value);
    let five = parseInt(document.getElementById('five').value);
    let six = parseInt(document.getElementById('six').value);
    let seven = parseInt(document.getElementById('seven').value);
    let eight = parseInt(document.getElementById('eight').value) ; 
    let nine = parseInt(document.getElementById('nine').value);
    let zero = parseInt(document.getElementById('zero').value);
    let one = parseInt(document.getElementById('dot').value);

  document.getElementById('display').value = one + two + three + four + five + six + seven + eight + nine + zero + dot   
}

function divide(){
    let one = parseInt(document.getElementById('one').value);
    let two = parseInt(document.getElementById('two').value);
    let three = parseInt(document.getElementById('three').value);
    let four = parseInt(document.getElementById('four').value);
    let five = parseInt(document.getElementById('five').value);
    let six = parseInt(document.getElementById('six').value);
    let seven = parseInt(document.getElementById('seven').value);
    let eight = parseInt(document.getElementById('eight').value) ; 
    let nine = parseInt(document.getElementById('nine').value);
    let zero = parseInt(document.getElementById('zero').value);
    let one = parseInt(document.getElementById('dot').value);
    document.getElementById('display').value = one / two / three / four / five / six / seven / eight / nine / zero / dot;
}

function subtract(){
    let one = parseInt(document.getElementById('one').value);
    let two = parseInt(document.getElementById('two').value);
    let three = parseInt(document.getElementById('three').value);
    let four = parseInt(document.getElementById('four').value);
    let five = parseInt(document.getElementById('five').value);
    let six = parseInt(document.getElementById('six').value);
    let seven = parseInt(document.getElementById('seven').value);
    let eight = parseInt(document.getElementById('eight').value) ; 
    let nine = parseInt(document.getElementById('nine').value);
    let zero = parseInt(document.getElementById('zero').value);
    let one = parseInt(document.getElementById('dot').value);
    document.getElementById('display').value = one - two - three - four - five - six - seven - eight - nine - zero - dot;
}

function multiply(){
    let one = parseInt(document.getElementById('one').value);
    let two = parseInt(document.getElementById('two').value)
    let three = parseInt(document.getElementById('three').value);
    let four = parseInt(document.getElementById('four').value);
    let five = parseInt(document.getElementById('five').value);
    let six = parseInt(document.getElementById('six').value);
    let seven = parseInt(document.getElementById('seven').value);
    let eight = parseInt(document.getElementById('eight').value);  
    let nine = parseInt(document.getElementById('nine').value);
    let zero = parseInt(document.getElementById('zero').value);
    let one = parseInt(document.getElementById('dot').value);
    document.getElementById('display').value = one * two * three * four * five * six * seven * eight * nine * zero * dot;
}

function clear(){
    document.getElementById('one').value =""
    document.getElementById('two').value =""
    document.getElementById('three').value =""
    document.getElementById('four').value =""
    document.getElementById('five').value =""
    document.getElementById('six').value =""
    document.getElementById('seven').value =""
    document.getElementById('eight').value = ""
    document.getElementById('nine').value =""
    document.getElementById('zero').value =""
    document.getElementById('dot').value =""
}
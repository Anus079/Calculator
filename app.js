function getnumber(num){
    var veiw = document.getElementById("view")
    veiw.value += num;
    
}
function clearresult(){
    var veiw = document.getElementById("view")
    veiw.value = "";
    
}
function open(){
   
}

function getresult(){
    var veiw = document.getElementById("view")
    veiw.value = eval(veiw.value)
}
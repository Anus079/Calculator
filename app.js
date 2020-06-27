function getnumber(num){
    var veiw = document.getElementById("view")
    veiw.value += num;
    
}
function clearresult(){
    var veiw = document.getElementById("view")
    veiw.value = "";
    
}
function open(){
    var veiw = document.getElementById("view")
    veiw.value = "0";
}

function getresult(){
    var veiw = document.getElementById("view")
    veiw.value = eval(veiw.value)
}

function clearone() {
    var getnumber = document.getElementById("view");
    var str = view.value;
    var num = str.length;
    var str1 = str.slice(0, num - 1);
    view.value = str1;
    console.log(str1)
}
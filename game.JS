
var arr = document.querySelectorAll("input[type=text]");
for (var i = 0; i < arr.length; i++) {
    var rand = Math.floor(Math.random() * 20);
    arr[i].value = rand
}
var str1 = "", str2 = ""
var count = 20;
document.querySelector("input[value='start game']").addEventListener("click", startGame);
document.getElementById("timer").style.display="none"
function startGame() {
    document.getElementById("timer").style.display="flex"
    str1 = "";
    document.getElementById("result").innerHTML = ""
    for (var i = 0; i < arr.length; i++) {
        str1 += arr[i].value;
        arr[i].value = ''
    }
    console.log(str1)
    set = setInterval("counting()", 800);
}

function counting() {
    if (count < 0) {
        clearInterval(set);
        check();
        count = 20;
        document.getElementById("timer").innerHTML=''
        document.getElementById("timer").style.display="none"
    }
    else {
        document.getElementById("timer").innerHTML = count
        count--

    }

}
function display()
{
    document.getElementById("result").style.display="none";
}
function check() {
    console.log(str1)
    console.log(str2)
    str2 = ""
    for (var i = arr.length - 1; i >= 0; i--) {
        str2 += arr[i].value
    }
    document.getElementById("result").style.display="block";
    if (str2 == str1)
        document.getElementById("result").innerHTML = "יפה מאד!! הצלחת"
    else
        document.getElementById("result").innerHTML = "חבל מאד!! נכשלת"
    for (var i = 0; i < arr.length; i++) {
        var rand = Math.floor(Math.random() * 10);
        arr[i].value = rand
    }
    setTimeout("display()",3000)
}

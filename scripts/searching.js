var array_size = 0;
var inp_aspeed=document.getElementById("a_speed");
var butts_algos=document.querySelectorAll(".algos button");


var userSize = 0;
var userArray = 0;
var key = 0;
function myFunction(){
    var temp = document.querySelector("#arraySize");
    var temp2 = document.querySelector("#arrayElements");
    var temp3 = document.querySelector("#key");
    userArray = temp2.value;
    userSize = temp.value;
    key = temp3.value;
    console.log(userArray);
    console.log(userSize);
    console.log(key);
}
key = parseInt(key);
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("column1");
cont.style="flex-direction:row";

var inp_submit = document.getElementById("submitButton");
inp_submit.addEventListener("click",generate_array);

function generate_array()
{
    if(userSize!=0){
        array_size = parseInt(userSize);
        var numbersArray = userArray.split(" ");
        div_sizes = numbersArray.map(Number);
    }
    if(userSize != div_sizes.length){
        alert("Array Size && Array Length is not matching");
        return ;
    }
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:rgb(102 116 204); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}
function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_submit.disabled = true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Linear Search":Linear();
                        break;
        case "Binary Search":Binary();
                        break;
    }
}

// Random input variables
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");

var butts_algos=document.querySelectorAll(".algos button");

var userSize = 0;
var userArray = 0;
function myFunction(){
    var temp = document.querySelector("#arraySize");
    var temp2 = document.querySelector("#arrayElements");
    userArray = temp2.value;
    userSize = temp.value;
    console.log(userArray);
    console.log(userSize);
}


var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("column1");
cont.style="flex-direction:row";
//Array generation and updation.

var inp_submit = document.getElementById("submitButton");
inp_submit.addEventListener("click",generate_array);
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    if(userSize!=0){
        array_size = parseInt(userSize);
        var numbersArray = userArray.split(" ");
        div_sizes = numbersArray.map(Number);
        if(userSize != div_sizes.length){
            var current = div_sizes.length
            for(let i=0;i<= userSize - current;i++){
                div_sizes.push(Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 80);
            }
        }
    }
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        if(userSize==0){
            div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 80;
        }
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:rgb(102 116 204); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    userSize = 0;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}


function runalgo()
{
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
    }
}
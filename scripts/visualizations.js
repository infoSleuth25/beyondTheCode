var speed=1000;
inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1000;
                break;
        case 2: speed=800;
                break;
        case 3: speed=500;
                break;
        case 4: speed=200;
                break;
        case 5: speed=100;
                break;
    }
    delay_time=speed;
}

var delay_time= speed;   
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_submit.disabled = false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}
enable_buttons();

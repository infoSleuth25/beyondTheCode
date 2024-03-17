

function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"rgb(74 79 92)");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"black");//Color update
            div_update(divs[i+1],div_sizes[i+1],"black");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"black");//Height update
            div_update(divs[i+1],div_sizes[i+1],"black");//Height update
    
            div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"rgb(74 79 92)");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"rgb(102 116 204)");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}


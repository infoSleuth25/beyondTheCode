
function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"black");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"rgb(74 79 92)");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"rgb(102 116 204)");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"black");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"rgb(102 116 204)");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"black");//Height update
            div_update(divs[i],div_sizes[i],"black");//Height update
            div_update(divs[index_min],div_sizes[index_min],"rgb(102 116 204)");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    enable_buttons();
    
}


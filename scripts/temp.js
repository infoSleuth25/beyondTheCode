function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
}

function quick_partition (start, end){
    var piv = div_sizes[start] ;
    var i = start;
    var j = end;
    div_update(divs[start],div_sizes[start],"brown");
    while(i<j){
        while(piv >= div_sizes[i] && i<end){
            i++;
            div_update(divs[i],div_sizes[i],"black");
        }
        while(piv < div_sizes[j] && j>start){
            j--;
            div_update(divs[j],div_sizes[j],"black");
        }
        if(i<j){
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            div_update(divs[i],div_sizes[i],"yellow");//Height update
            div_update(divs[j],div_sizes[j],"yellow");//Height update
        }
    }
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[start],div_sizes[start],"yellow");//Height update
    div_update(divs[j],div_sizes[j],"green");//Height update
    return j;
}
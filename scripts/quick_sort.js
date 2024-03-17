
// function Quick()
// {
//     c_delay=0;

//     quick_sort(0,array_size-1);

//     enable_buttons();
// }

// function quick_partition (start, end)
// {
//     var piv = div_sizes[start] ;//make the first element as pivot element.
//     var i = start + 1;
//     div_update(divs[start],div_sizes[start],"rgb(74 79 92)");//Color update

//         for(var j =start + 1; j <= end ; j++ )
//         {
//             //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
//             if (div_sizes[ j ] < piv)
//             {
//                 div_update(divs[j],div_sizes[j],"rgb(74 79 92)");//Color update

//                 div_update(divs[i],div_sizes[i],"black");//Color update
//                 div_update(divs[j],div_sizes[j],"black");//Color update

//                 var temp=div_sizes[i];
//                 div_sizes[i]=div_sizes[j];
//                 div_sizes[j]=temp;

//                 div_update(divs[i],div_sizes[i],"black");//Height update
//                 div_update(divs[j],div_sizes[j],"black");//Height update

//                 div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Height update
//                 div_update(divs[j],div_sizes[j],"rgb(102 116 204)");//Height update

//                 i += 1;
//             }
//     }
//     div_update(divs[start],div_sizes[start],"black");//Color update
//     div_update(divs[i-1],div_sizes[i-1],"black");//Color update
    
//     var temp=div_sizes[start];//put the pivot element in its proper place.
//     div_sizes[start]=div_sizes[i-1];
//     div_sizes[i-1]=temp;

//     div_update(divs[start],div_sizes[start],"black");//Height update
//     div_update(divs[i-1],div_sizes[i-1],"black");//Height update

//     for(var t=start;t<=i;t++)
//     {
//         div_update(divs[t],div_sizes[t],"green");//Color update
//     }

//     return i-1;//return the position of the pivot
// }

// function quick_sort (start, end )
// {
//     if( start < end )
//     {
//         //stores the position of pivot element
//         var piv_pos = quick_partition (start, end ) ;     
//         quick_sort (start, piv_pos -1);//sorts the left side of pivot.
//         quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
//     }
//  }


 //

 function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_sort (start, end )
{
    if( start <= end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;   
        for(let i=start;i<piv_pos;i++){
            div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Height update
        }  
        for(let i=piv_pos+1;i<=end;i++){
            div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Height update
        }
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
            div_update(divs[i],div_sizes[i],"orange");
        }
        while(piv < div_sizes[j] && j>start){
            div_update(divs[j],div_sizes[j],"black");
            j--;
        }
        if(i<j){
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            div_update(divs[i],div_sizes[i],"yellow");//Height update
            div_update(divs[j],div_sizes[j],"yellow");//Height update

            div_update(divs[i],div_sizes[i],"rgb(102 116 204)");//Height update
            div_update(divs[j],div_sizes[j],"rgb(102 116 204)");//Height update
        }
    }
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[start],div_sizes[start],"yellow");//Height update
    div_update(divs[j],div_sizes[j],"green");//Height update
    return j;
}
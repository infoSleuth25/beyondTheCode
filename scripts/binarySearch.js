function Binary(){
    document.getElementById("time").innerText="O(log(N))";
    document.getElementById("space").innerText="O(1)";
    c_delay = 0;
    let s= 0;
    let e= array_size - 1;
    let temp = 1;
    for(let i=1;i<=e;i++){
        if(div_sizes[i-1] > div_sizes[i]){
            temp = 0;
            break;
        }
    }
    let answer1 = "";
    if(temp == 0){
        answer1 = "We can not apply binary search because array is not sorted !";
    }
    else{
        let ans1 = -1;
        while(s<=e){
            div_update(divs[s],div_sizes[s],"yellow");
            div_update(divs[e],div_sizes[e],"yellow");
            let mid =Math.floor(s + (e-s)/2);
            div_update(divs[mid],div_sizes[mid],"black");
            if(key==div_sizes[mid]){
                div_update(divs[mid],div_sizes[mid],"green");
                ans1 = mid;
                break;
            }
            else if(key>div_sizes[mid]){
                div_update(divs[s],div_sizes[s],"rgb(102 116 204)");
                div_update(divs[e],div_sizes[e],"rgb(102 116 204)");
                s = mid +1
            }
            else{
                div_update(divs[s],div_sizes[s],"rgb(102 116 204)");
                div_update(divs[e],div_sizes[e],"rgb(102 116 204)");
                e = mid -1;
            }
        }
        if(ans1 == -1){
            answer1 = key + " is not present in the array";
        }
        else{
            answer1 = key + " is present at index : "+ans1;
        }
    }
    document.getElementById("answer").innerText=answer1;
    enable_buttons();
}

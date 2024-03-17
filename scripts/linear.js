function Linear(){
    document.getElementById("time").innerText="O(N)";
    document.getElementById("space").innerText="O(1)";
    c_delay = 0;
    let ans = [];
    for(var i=0;i<array_size;i++){
        div_update(divs[i],div_sizes[i],"black");//Color update
        if(div_sizes[i]==key){
            div_update(divs[i],div_sizes[i],"green");
            ans.push(i);
        }
    }
    if(ans.length==0){
        let answ = key + " is not present in the array."
        document.getElementById("answer").innerText= answ;
    }
    else{
        let answer1 = key + " is present at index : ";
        for(let i=0;i<ans.length;i++){
            answer1= answer1 + ans[i] + " ";
        }
        document.getElementById("answer").innerText=answer1;
    }
    enable_buttons();
}


  function answer(){
        var div1=document.getElementById("item1").value;
        var div2=document.getElementById("item2").vlaue;
        var div3=document.getElementById("item3").value;
        var div4=document.getElementById("item4").value;
        var div5=document.getElementById("item5").value;
        var div6=document.getElementById("item6").value;
        var div7=document.getElementById("item7").value;
        var div8=document.getElementById("item8").value;
        var div9=document.getElementById("item9").value;
        if (div1=="x" && div2=="x" && div3=="x" || div4=="x" && div5=="x" && div6=="x" || div7=="x" && div8=="x" && div9=="x"|| div1=="x" & div4=="x" && div7=="x"|| div2=="x" && div5=="x" && div8=="x"|| div3=="x" && div6=="x" && div9=="x"|| div1=="x" && div5=="x" && div9=="x" || div3=="x" && div5=="x" && div7=="x"){
            alert("x is Winner!")
        }
        else if (div1=="0" && div2=="0" && div3=="0" || div4=="0" && div5=="0" && div6=="0" || div7=="0" && div8=="0" && div9=="0"|| div1=="0" && div4=="0" && div7=="0"|| div2=="0" && div5=="0" && div8=="0"|| div3=="0" && div6=="0" && div9=="0"|| div1=="0" && div5=="0" && div9=="0" || div3=="0" && div5=="0" && div7=="0"){
            alert("0 is Winner!")
        }
        else if(div1!=="?" && div2!=="?" && div3!=="?" && div4!=="?" && div5!=="?" && div6!=="?" && div7!=="?" && div8!=="?" && div9!=="?" && div1!="x" && div2!="x" && div3!="x" && div4!="x" && div5!="x" && div6!="x" && div7!="x" && div8!="x" && div9!="x"&& div1!="x" && div4!="x" && div7!="x"&& div2!="x" && div5!="x" && div8!="x"&& div3!="x" && div6!="x" && div9!="x"&& div1!="x" && div5!="x" && div9!="x" && div3!="x" && div5!="x" && div7!="x"){
            alert("Match is draw!!")
        }
        else if(div1!=="?" && div2!=="?" && div3!=="?" && div4!=="?" && div5!=="?" && div6!=="?" && div7!=="?" && div8!=="?" && div9!=="?" && div1!="0" && div2!="0" && div3!="0" && div4!="0" && div5!="0" && div6!="0" && div7!="0" && div8!="0" && div9!="0"&& div1!="0" && div4!="0" && div7!="0"&& div2!="0" && div5!="0" && div8!="0"&& div3!="0" && div6!="0" && div9!="0"&& div1!="0" && div5!="0" && div9!="0" && div3!="0" && div5!="0" && div7!="0" ){
            alert("Match is draw!!")
        }
    }
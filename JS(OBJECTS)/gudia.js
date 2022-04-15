function do_or_dont(a){
    if (a>=1 && a<=14){
        console.log("you can drink toddy")
    }
    if (a>18 && a<20){
        console.log("you can drink coke")
        }

    if (a>=20 && a<=60){
        console.log("you can drik beer")
    }
    else{
        console.log("you can drink whisky")
    }
}

do_or_dont(require("readline-sync").questionInt("Enter a no:"))
var project=prompt("Enter your link:")
var link=document.links
for (i=0;i<link.length;i++){
    if (link[i].text==project){
        console.log(link[i])
    }
}

// link="https://navgurukul.org/"


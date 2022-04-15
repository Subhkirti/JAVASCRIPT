function a(b) {
    return new Promise(function (resolve, reject) {
        console.log("Wait for 3 seconds...")
        setTimeout(() => {
            if (b) {
                resolve("I am resolved!!!")
            }
            else {
                reject("I am rejected!!!")
            }
        }, 3000)
    })
}

function onfulfill(c){
    console.log(c);
}
function onrejection(d){
    console.log(d);
}
a(false).then(onfulfill).catch(onrejection)
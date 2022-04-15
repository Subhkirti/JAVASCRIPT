// why:-Because in promise we have to give two function must like reolve and reject but with async we don't have need to use reolve reject.
async function test(){
    return "hello"
}
test().then((result)=>console.log(result)).catch(()=>console.log("I am not fulfilled"))
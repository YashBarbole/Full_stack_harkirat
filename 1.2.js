// function findSum(a,b){
//     return a+b;
// }
// const ans=findSum(1,2);
// console.log(ans);

function counter() {
    let i = 30;
    let interval = setInterval(() => {
        console.log(i);
        i--;
        if (i < 0) {
            clearInterval(interval); // stop when i becomes less than 0
        }
    }, 1000);
}

counter(); // call it once to start the countdown

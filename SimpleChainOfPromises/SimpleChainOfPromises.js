const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("canada");
        resolve();
    }, 12000);
});

promise.then((resolve,reject)=>{
    setTimeout(() => {
        console.log("france");
    }, 12000);
}).then(
    ()=>{
        setTimeout(() => {
            console.log("italy");
        }, 12000);
    }
);
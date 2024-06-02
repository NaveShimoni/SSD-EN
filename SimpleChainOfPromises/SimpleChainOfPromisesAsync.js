async function f(country) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log(country);
            resolve(country);
        }, 12000);
    })
}

async function main(){

    console.log(await f("canada"));
    console.log(await f("france"));
    console.log(await f("italy"));

}

main().catch(()=>console.log("problem took place"));
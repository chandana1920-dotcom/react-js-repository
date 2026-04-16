document.getElementById("load-data").addEventListener("click",()=>{
    document.getElementById("status").innerText = "loding..";
    let promise = new promise((resolve,reject) =>{
      if(Math.random() > 0.5){
        setTimeout(() => {
            resolve("data loaded");

        },2000);

      }
    });
    promise.then((data) => {
        document.getElementById("status").innerText = data;
    });
    promise.catch(())
// let div = document.createElement("div");
// let ul = document.createElement("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");

// });
// ul.addEventListener("click", function () {
//     console.log("ul was clicked");

// });
// // li.addEventListener.addEventListener("click", function(){
// //     console.log("li was clicked");

// // })

// for(li of lis){
//     li.addEventListener("click",function(){
//         console.log("li was clicked");
    
//     });
// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    
    
});

ul.addEventListener("click",function(e){
    console.log(e.target);
    console.log(e.target.tagName);

    if(e.target.tagName == "BUTTON"){
        let par = e.target.parentElement;
        par.remove();
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
    
//     })
// }
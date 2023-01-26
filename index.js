const btn =document.getElementsByClassName("plus")
const btnee =document.getElementsByClassName("moins")
//console.log(btnee)
// console.log(btn)
const checkboxs=document.querySelectorAll("input")
//console.log(checkboxs)



for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",increment)
    btnee[i].addEventListener("click",decriement)
    checkboxs[i].addEventListener("click",pricetotal)
}
function increment(event){
const bottun=event.target
// console.log(bottun)
const divelement=bottun.parentElement
// console.log(divelement)
const quntitytag=divelement.querySelector("p")
// console.log(quntitytag)
var quantityvalue=Number(quntitytag.innerHTML)
quantityvalue++
quntitytag.innerHTML=quantityvalue
//console.log(quantityvalue)
const tr=divelement.parentElement.parentElement
const uintpricevalue=Number(tr.querySelector(".unit-price").innerHTML)
//console.log(uintpricevalue)
//console.log(uintpricevalue)
const pricetag=tr.querySelector(".price")
//console.log(pricetag)
var pricevalue=Number(pricetag.innerHTML)
//console.log(pricevalue)
pricevalue=quantityvalue*uintpricevalue
//console.log(pricevalue)
pricetag.innerHTML=pricevalue

}
function decriement(event){
    const bottun=event.target
    // console.log(bottun)
    const divelement=bottun.parentElement
    // console.log(divelement)
    const quntitytag=divelement.querySelector("p")
    // console.log(quntitytag)
    var quantityvalue=Number(quntitytag.innerHTML)
    quantityvalue--
    quntitytag.innerHTML=quantityvalue
    //console.log(quantityvalue)
    const tr=divelement.parentElement.parentElement
    const uintpricevalue=Number(tr.querySelector(".unit-price").innerHTML)
    //console.log(uintpricevalue)
   // console.log(uintpricevalue)
    const pricetag=tr.querySelector(".price")
   // console.log(pricetag)
    var pricevalue=Number(pricetag.innerHTML)
   // console.log(pricevalue)
    pricevalue=quantityvalue*uintpricevalue
    //console.log(pricevalue)
    pricetag.innerHTML=pricevalue
}


function pricetotal(event){
    const checkbox=event.target
   //console.log(checkbox)
    var price=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML)
   // console.log(price)
    var totaltag=document.getElementById("total")
    //console.log(totaltag)
    var totalvalue=parseInt(totaltag.innerHTML)
   // console .log(totalvalue)
    const btn=checkbox.parentElement.parentElement.querySelector(".plus")
    if(checkbox.checked===true){
        totalvalue+=price
        btn.setAttribute("disable",true)
    }
    else{
        totalvalue-=price
        btn.removeAttribute("disabled")

    }
    totaltag.innerHTML=totalvalue
}
const marss =document.getElementsByClassName("deleat")
console.log(marss)

for(var i=0;i<btn.length;i++){ marss[i].addEventListener("click",deleat)
}
function deleat(event){
    const deleat=event.target
    console.log(deleat)
    const but=deleat.parentElement
    console.log(but)
    const logo=deleat.parentElement.querySelector(".deleat")
    console.log(logo)
    deleat.closest("tr").remove().style.color=red
    console.log(deleat)
    
    }
    
    const div =document.getElementsByClassName("like")
    console.log(like)
    
    for(var i=0;i<btn.length;i++){ div[i].addEventListener("click",like)
    }
    function like(event){
        const like=event.target
        //console.log(like)
        const user=like.parentElement.parentElement.parentElement.parentElement
        //console.log(user)
        if(like.style.color="red"){
            like.style.color="grey"}
        else{like.style.color="red"}
    }


var menuObjects = [
    {
        name:"Salty_AF",
        price: 10.00 
    },
    {
        name:"cats",
        price:45.00
    },
    {
     name:"RyanFire",
     price: 8.00
    },
    {
        name:"Duke_Silver",
        price: 8.00
    },
    {
        name:"data",
        price:8.00
    },
    {
        name:"zelda",
        price: 32.00
    },
    {
        name: "ramen",
        price: 15.00
    },
    {
        name:"crabby",
        price:8.00
    },
    {
        name: "garbage",
        price: 10.00
    },
    {
        name: "pinhead",
        price: 18.00
    }
];
var total =0;
var checkout;
function addItem(index){
    total +=menuObjects[index].price;
    checkout.innerText=total;
}
function startPage(){
    checkout = document.getElementById('checkout')
}
$( document ).ready(function() {
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
        name:"fire",
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
   menuObjects.forEach(element => {
       $("#menu").append(element.name+"  $"+ element.price+"<button  class = 'item-"+element.name+"'>Add</button>");
   });
  
   $( ".item-cats" ).click(function() {
    total +=menuObjects[1].price;
    $("#checkout").html(total);
  });
  
  $( ".item-Salty_AF" ).click(function() {
    total +=menuObjects[0].price;
    $("#checkout").html(total);
  });
  $( ".item-fire" ).click(function() {
    total +=menuObjects[2].price;
    $("#checkout").html(total);
  });
    $( ".item-Duke_Silver" ).click(function() {
        total +=menuObjects[3].price;
        $("#checkout").html(total);
      });
      $( ".item-data" ).click(function() {
        total +=menuObjects[4].price;
        $("#checkout").html(total);
      });
      $( ".item-zelda" ).click(function() {
        total +=menuObjects[5].price;
        $("#checkout").html(total);
      });
      $( ".item-ramen" ).click(function() {
        total +=menuObjects[6].price;
        $("#checkout").html(total);
      });
      $( ".item-crabby" ).click(function() {
        total +=menuObjects[7].price;
        $("#checkout").html(total);
      });
      $( ".item-garbage" ).click(function() {
        total +=menuObjects[8].price;
        $("#checkout").html(total);
      });
      $( ".item-pinhead" ).click(function() {
        total +=menuObjects[9].price;
        $("#checkout").html(total);
      });

});

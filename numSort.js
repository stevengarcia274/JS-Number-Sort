function visualizeArr(inputString){
   const inputToArr = inputString.split(" ").filter(Boolean);
   /* learn more about how this filter works and how we did it */

   if (inputToArr.length > 10){
      window.alert("ONLY 10 ITEMS ALLOWED IN ARRAY.\nTRY AGAIN.");
   }

   else{
      document.getElementById("insert-here").innerHTML = arrItemsDisplay(inputToArr);
   }
}

function arrItemsDisplay(inputArr){
   let htmlInsert = ``;
   for(let i = 0; i < inputArr.length; i++){
      htmlInsert += `<div style="border:2px solid black; padding: 12px;">${inputArr[i]}</div>`;
   }

   return htmlInsert;
}

function clearInput(){
   document.getElementById("text-demo1").value = "";
   document.getElementById("insert-here").innerHTML = "";
}

function arrSort(inputToSrt){
   let sortedArr = inputToSrt.split(" ").filter(Boolean);
   document.getElementById("insert-here").innerHTML = arrItemsDisplay(sortedArr.sort(function (a, b){
      return a -b;
   }));
}



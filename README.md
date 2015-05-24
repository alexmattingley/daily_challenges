<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>jQuery Prototype</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<style>
</style>
</head>

<body>
<script>

var haystack = ['red','chair', 'pink', 'table', 'gray', 'green', 'tan'];
var needle = ['fridge', 'chair','desk','table','couch'];
var output = null;


function search_array(array1, array2){

var temp_array = [];
for(var i=0; i < array1.length; i++) 
  for(var j=0; j < array2.length; j++) 
      if(array1[i] = array2[j]) {
      temp_array.push(array1[i]);
      
      };
   
     
  
    output.push(temp_array);
    
console.log("This is the items that match in the 2 array" + output);  //outputs

}

$( document ).ready(function() {
 

search_array(haystack, needle); 


});




</script>


</body>
</html>















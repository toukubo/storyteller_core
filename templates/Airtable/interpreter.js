 
interpreter = {}
interpreter._interpret = function(hay,noun){
   const replaced = hay.replace(/noun/g, 'Model')
//    console.log(replaced) // apple banana orange
      
   hay = replaced
      return hay     
}
module.exports =  interpreter

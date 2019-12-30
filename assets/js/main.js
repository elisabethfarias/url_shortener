var servidor = "https://api.myjson.com/bins/1g7uf0"
        
$.getJSON(servidor , function(json) {
  console.log(json)
  $.each(json, function(index,val) {
    if(index < 6) {  
      $(".lista").append("<tr class='linhaTabela'><td class='url vermelha'>"+val.shortUrl+"</td><td class='numeros'>"+val.hits+"</td></tr>");
    }
  });
});


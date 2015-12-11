$("document").ready(function(){

var url = 'https://www.bitcointoyou.com/api/ticker.aspx';

$.ajax({
   type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'callback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       alert("estamo aqui ");
    },
    error: function(e) {
      alert("erro ");
    }
});


})

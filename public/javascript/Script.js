var input = document.getElementById('saisie');
var test = document.getElementById('test');

input.onkeyup = function ()
{
    load(input.value);
}

function load(data)
{
    $.ajax(
   {
       url: "/recup",
       type: "POST",
       cache: false,
       data: { valeur: data },

       complete: function ()
       {
           console.log('complete');
       },

       success: function (data)
       {
           if (data.length != 0)
           {
               $('#resultat').slideDown();
               $('#resultat').empty();
               for (var i = 0, c = data.length; i < c; i++)
               {
                   $('<p>' + data[i] + '</p>').appendTo('#resultat');
               }
           } else
           {
               $('#resultat').slideUp();
           }

       }
   });
};
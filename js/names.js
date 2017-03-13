var ncount = 0;
$('#badgeArea').html(0);

function getNames()
{
    var daname = $('#inputs').val();
    var names = [];
    var count = 0;
    ncount++;
    var url = "http://localhost:7071/api/myTrigger?name="+daname;
    

    $.get(url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        daname = data;
    });


       names.push(daname); 
       

    for(var count=0; count<names.length; count++)
    {
        
        $('#data').hide().fadeIn(300).append("<p>" +names[count] + "</p>");

    }
$('#badgeArea').html(ncount);
}

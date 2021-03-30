

function handleSubmit(event)
{
    event.preventDefault();

    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("time").value;
    var r1 = r/100;
    var t1 = t/12;
    var si = p*r1*t1;
    document.getElementById("simpleintrest").innerHTML = ": " + " :  " + si;
    
}
        
function tellStory(){
  var tpoiss = document.getElementById("poiss");
  var ttydruk = document.getElementById("tydruk");
  var tkoht = document.getElementById("koht");
  var ttoit = document.getElementById("toit");
  var output = document.getElementById("output");

  var poiss = tpoiss.value;
  var tydruk = ttydruk.value;
  var koht = tkoht.value;
  var toit = ttoit.value;

  var jutt = poiss +" ja "+ tydruk +" läksid "+ koht+ "sse "+toit+" sööma.";

  output.innerHTML = jutt;
}

// noprotect
function play(){
  var secret = 7;
  var tip, numOfChance, count, choice = true;

  numOfChance = 5; // Total number of attempts
  count = 0;       // actually attempt

  do{
  tip = parseInt(prompt("Myslim si cislo v rozsahu 1 - 20: (pokus: " + count + " )."));

  if (tip < secret)
    {
      console.log("Moje je vacsie !");
    }
  
   if (tip > secret)
    {
      console.log("Moje je mensie !");
    }
  if (tip === 0 || numOfChance === 0)
    {
      console.log("Vycerpal si pocet pokusov !");
      break;
    }
  ++count;
  --numOfChance;
  } while (tip !== secret);
  
  if ( tip === secret){
    console.log("Hura uhadol si moje cislo: " + secret);
    console.log("Uhadol si to na " + count + " pokus.");
  }
  else {console.log("Je mi to luto :-(, skus si zahrat este raz !");}

  if (confirm('Chces hrat znovu ?')) {
    choice = true;
    } else {
    console.log("Dakujem za hru :-)");
    choice = false;
    }
  return choice;
}

do{
  var game = true; // zaciatok hry
  game = play();
} while(game);
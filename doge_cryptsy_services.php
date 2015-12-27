<?php
   $cryptsy =  json_decode(file_get_contents("http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=311"));

   $exchange = $cryptsy->return->markets->DOGE;

   $volume = $exchange->volume;
   $label = $exchange->label;
   $primary_name = $exchange->primaryname;
   $last_trader = $exchange->lasttradetime;
   $recenttrades = $exchange->recenttrades;
   $price = number_format($recenttrades[0]->price / $recenttrades[0]->quantity,8);

   $ticker =
   array(
     "label" => $label ,
     "currency" => $primary_name ,
     "volume" => $volume ,
     "lastrader" => $last_trader ,
     "price" => $price);

   $ticker = json_encode($ticker);


   echo $ticker;

?>

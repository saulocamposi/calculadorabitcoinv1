<?php
   $cryptsy =  json_decode(file_get_contents("http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=313"));

/*print "<pre>" ;
print_r($cryptsy) ;
print "<pre/>";
*/
//exit;


   $exchange = $cryptsy->return->markets->DRK;


   $volume = $exchange->volume;
   $currency = $exchange->primaryname;
   $label = $exchange->label;
   $last_trader = $exchange->lasttradetime;
   $recenttrades = $exchange->recenttrades;
   $price = number_format($recenttrades[0]->price / $recenttrades[0]->quantity,8);

   $ticker =
   array(
     "label" => $label ,
     "currency" => $currency ,
     "volume" => $volume ,
     "lastrader" => $last_trader ,
     "price" => $price);

   $ticker = json_encode($ticker);


   echo $ticker;

?>

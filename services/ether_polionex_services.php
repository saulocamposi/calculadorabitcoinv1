<?php

   $service =  json_decode(file_get_contents("https://poloniex.com/public?command=returnTicker"));

   $exchange = $service->BTC_ETH;


   $volume = $exchange->volume;
   $label = $exchange->label;
   $primary_name = $exchange->primaryname;
   $last_trader = $exchange->lasttradetime;
   $recenttrades = $exchange->recenttrades;
   $price = $recenttrades[0]->price;

   $ticker =
   array(
     "label" => $label,
     "currency" => $primary_name ,
     "volume" => $volume ,
     "lastrader" => $last_trader ,
     "price" => $price);

   $ticker = json_encode($ticker);


   echo $ticker;

?>

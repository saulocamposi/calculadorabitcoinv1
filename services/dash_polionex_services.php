<?php
include('../utils/array_utils.php');

   $service =  json_decode(file_get_contents("https://poloniex.com/public?command=returnTicker"));

ArrayUtils::showArray($service);


   $exchange = $service->BTC_DASH;

     //include('array_utils.php');
     //ArrayUtils::showArray($cryptsy);




   $volume = $exchange->baseVolume;
   $currency = "DASH";
   $label = "DASH";
   $last_trader = $exchange->last;
   $price = $last_trader;

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

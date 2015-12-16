<?php
   $bitvalor =  json_decode(file_get_contents("http://api.bitvalor.com/v1/ticker.json"));

   $exchange = $bitvalor->ticker_1h->exchanges;

   $exchange = json_encode($exchange);

   echo $exchange;
?>

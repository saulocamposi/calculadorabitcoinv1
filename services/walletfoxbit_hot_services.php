<?php
  include('../utils/array_utils.php');

   $wallet =  json_decode(file_get_contents("https://blockchain.info/address/1FoxBitjXcBeZUS4eDzPZ7b124q3N7QJK7?format=json&cors=true"));

   $received = $wallet->total_received;
   $sent = $wallet->total_sent;
   $balance = $wallet->final_balance;

   $ticker =
   array(
   "received" => $received ,
   "sent" => $sent ,
   "balance" => $balance
   );

   $wallet = json_encode($ticker);

   echo $wallet;
?>

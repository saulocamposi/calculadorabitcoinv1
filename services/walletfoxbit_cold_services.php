<?php
  include('../utils/array_utils.php');

   $wallet =  json_decode(file_get_contents("https://blockchain.info/address/3KAuEYkuJQw1Ad2GzWjfC7V5XoL2fCqjGN?format=json&cors=true"));

   function formatBTC($value){
     $valueBTC = substr($value, 0, 3);
     $valeuSAT = substr($value, 3, 8);
     return $valueBTC . "," . $valeuSAT;
   }

   $received = $wallet->total_received;
   $received = formatBTC($received);

   $sent = $wallet->total_sent;
   $sent = formatBTC($sent);

   $balance = $wallet->final_balance;
   $balance = formatBTC($balance);

   $ticker =
   array(
   "received" => $received ,
   "sent" => $sent ,
   "balance" => $balance
   );

   $wallet = json_encode($ticker);

   echo $wallet;
?>

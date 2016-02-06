<?php
  include('../utils/array_utils.php');

   $wallet =  json_decode(file_get_contents("https://blockchain.info/address/1FoxBitjXcBeZUS4eDzPZ7b124q3N7QJK7?format=json&cors=true"));

/*
   function formatBTC($value){
     $valueBTC = substr($value);
     $valeuSAT = substr($value);
     return $valueBTC + " " + $valeuSAT;

   }
*/
   $received = $wallet->total_received;
   $receivedBTC =  substr($received, 0, 3);
   $receivedSAT =  substr($received, 3, 8);
   $received = $receivedBTC + "," + $receivedSAT;

   $sent = $wallet->total_sent;
   /*$sentBTC = substr();
   $sentSAT = substr();
   $sentSAT = $sentBTC + "," + $sentSAT;
   */
   $balance = $wallet->final_balance;

   /*$balanceBTC = substr();
   $balanceSAT = substr();
   $balaceSAT = $balaceBTC + "," + $balaceSAT;
   */

   $ticker =
   array(
   "received" => $received ,
   "sent" => $sent ,
   "balance" => $balance
   );

   $wallet = json_encode($ticker);

   echo $wallet;
?>

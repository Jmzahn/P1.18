#!/bin/bash

while :;do
for i in '\/';do
  if [ ! -z $1 ];then
    tput setab $((RANDOM%7 + 1))
    echo -n " "
  else
    tput setaf $((RANDOM%7 + 1))
    echo -n $i
  fi
done
sleep 0.001
done

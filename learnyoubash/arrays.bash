#!/usr/bin/env bash

<<"TESTS"
#creating arrays
names[0]=Ron
names[1]=Melvin
names[2]=Mike
echo ${names[*]}

#compound array creation 
cars=(Toyota Ford Chevy Jeep)
echo ${cars[*]}

#slicing arrays
echo ${cars[*]:0:2}

#slicing positional parameters
echo ${@:1:2}
TESTS

#slice 2:3 and save to new array
#add to start of array 2 "I", "am"
#add to end of array 2 "and", 4th postion
#echo all
echo I am ${2} ${3} and $4

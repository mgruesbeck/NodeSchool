#!/usr/bin/env bash
# multiply 1st param with sum of 2 & 3 param.
# save as $RESULT

RESULT=$(( ${1} * (${2} + ${3}) ))

echo project-$RESULT/{src,dest,test}/{index,util}.js

#!/bin/bash

files=(`find . -type f -name '*.spec.js'`)

for i in "${files[@]}"
do :
    node $i
done

echo "Wcisnij enter aby kontynuować..."
read
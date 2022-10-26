#!/bin/bash
cd ./src/backend/dist/
files=(`find . -type f -name '*.spec.js'`)

exitCode=0;
for i in "${files[@]}"
do :
    node $i
    currentExitCode=$?
    if (($currentExitCode !=0))
    then
    exitCode=$currentExitCode;
    fi
done
exit $exitCode;
#!/bin/bash
#Simplifies the creation of templates for the coderbyte challenges

if [ "$#" -ne 1 ]; then
    echo "Usage createChal.sh FILENAME"
    echo "Only accepts one argument"
    exit 1;
fi
FILE_DIR=`pwd`

fileString="function $1(arg) {\n\n}\n\nvar out = $1();\nconsole.log(out);"

echo -e $"$fileString" > "$FILE_DIR/$1.js"

#!/bin/bash
#Samples that we can simulate that its a list of unorganised files
files=("document.txt" "image.jpg" "presentation.ppt" "notes.txt" "photo.jpg" "script.sh")

#We then loop through 1 by 1 until we reach end
#all files are placed in their designated foler
for file in "${files[@]}"; do
    #this code gets the file extension
    extension="${file##*.}"
    
    #We use sequencing to to put files in their designated place 
    # e.g. document.txt goes in Text_Files etc
    if [ "$extension" == "txt" ]; then
        echo "Moving $file to Text_Files folder"
    elif [ "$extension" == "jpg" ]; then
        echo "Moving $file to Images folder"
    elif [ "$extension" == "ppt" ]; then
        echo "Moving $file to Presentations folder"
    elif [ "$extension" == "sh" ]; then
        echo "Moving $file to Scripts folder"
    else
        echo "File type of $file is not recognized."
    fi
done


#We can add extra or other types of files, and we can sort it out by 
#including it in the if statements. So it doesnt matter what type of file it is, it
#will be sorted
#!/bin/bash

#This code gets the disk usage from the rootfile
disk_usage=$(df / | grep '^/dev' | awk '{print $5}' | sed 's/%//')

# Asked threshold set to 80
threshold=80

# This compares between threshold and disk_usage
if [ "$disk_usage" -gt "$threshold" ]; then
    echo "Warning: Disk usage is at $disk_usage%, which exceeds the threshold of $threshold%."
else
    echo "Disk usage is at $disk_usage%, which is within the safe range."
fi
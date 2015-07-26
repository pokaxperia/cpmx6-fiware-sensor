# Bash script to update values
#!/bin/bash
 
value=$1
echo sensor value: $value
 
#Get the current sensor value of the sensor
valueSensor=`grep -n 'value' sensor2.json | head -n 2 | cut -d':' -f 3 | cut -d'[' -f 2 | cut -d '"' -f 2`
echo $valueSensor
valor=`echo $valueSensor\c`
 
#Change value to current mesures
str="\"value\" : $value"
 
cp sensor2.json sensorx.json
sed -i "$valor\\$str" sensorx.json
 
# Actualizar y buscar valor 200 Exitoso
string=`curl --request POST 'http://52.27.146.185:1026/v1/updateContext'  -s  -S  --header 'Content-Type: application/json'  --header 'Accept: application/json'  -d @sensor2.json | grep -w "code" | cut -d'"' -f 4`
echo $string
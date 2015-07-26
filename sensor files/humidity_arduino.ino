/**
 * Ejemplo de sensor de humedad v0.1
 * Campus Party Mèxico 6
 * @Autor Luis Ballado
 */
 
int Valor;
 
void setup() {
  Serial.begin(9600);
  Serial.println("Ejemplo de Sensor v0.1");
}
 
void loop() {
  Valor = analogRead(0);
  Serial.print("Sensor valor: ");
  Serial.print(Valor);
 
  /**
  if(Valor <= 300)
    Serial.println(" Seco, necesita regar");
 
  if((Valor > 300) and (Valor <= 700))
    Serial.println(" Humedo, no regar");
 
  if(Valor > 700)
    Serial.println(" Muy Humedo");
    **/
  //Proceso para hacer la conexion al Procesador de Linux
  Process p;
  //Lugar donde se encuentra el bash
  p.begin("/root/fiware/dummy.sh");
  p.addParameter(String(valor));
  p.run();
 
  while(p.running());
  while(p.available()){
    int value = p.parseInt();
 
    if(value == 200){
      Serial.print("service ");
      Serial.print(value);
      }else
        Serial.println("Service error!");
      break;
    }
    Serial.flush();
 
 delay(1000);
 
}
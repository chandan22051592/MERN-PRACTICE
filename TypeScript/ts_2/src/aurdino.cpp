// Define LED pin
int ledPin = 3;

void setup() {
  // Set the pin as OUTPUT
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED ON
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1 second

  // Turn the LED OFF
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1 second
}

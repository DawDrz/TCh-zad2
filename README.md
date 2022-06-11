W stosunku do przykładu, zostały zmienione dane na stronie głównej, oraz funkcja wyliczająca wyrazy ciągu.
Aby mechanizm wybierania ostatnich pięciu wyników działał poprawnie, należało również zmienić sposób przechowywania danych w magazynie Redis.

Aby zachować strukturę programu, tzn. funkcja przyjmuje jeden argument, zostały przyjęte stałe:
- Pierwszy wiersz ciągu (a1) = 1
- Obliczany numer wyrazu ciągu (n) = 5
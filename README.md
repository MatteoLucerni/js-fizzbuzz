TRACCIA:

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

# FIZZBUZZ

- salvo in variabile un target dal DOM dove poi inserirò come figli le stringe desiderate
- **FINO A CHE** ho 100 numeri stampati:
    - stampo un numero
    - aumento di uno
    - **SE** il numero è multiplo di 3
        - sovrascrivo il numero con la stringa 'Fizz'
        - lo sfondo dell'elemento del DOM che contiene la stringa sarà verde
    - **ALTRIMENTI SE** il numero è multiplo di 5
        - sovrascrivo il numero con la stringa 'Buzz'
        - lo sfondo dell'elemento del DOM che contiene la stringa sarà giallo
    - **ALTRIMENTI SE** il numero è multiplo sia di 5 che di 3
        - sovrascrivo il numero con la stringa 'FizzBuzz'
        -- lo sfondo dell'elemento del DOM che contiene la stringa sarà rosso
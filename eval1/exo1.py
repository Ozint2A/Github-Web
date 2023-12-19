def repeterPhrase(nombre1, nombre2, phrase):
    resultat = nombre1 * nombre2
    for loop in range(resultat):
        print(phrase)

nombre1 = int(input("nombre1 "))
nombre2 = int(input("nombre2 "))
phrase = input("Votre phrase ? ")

repeterPhrase(nombre1, nombre2 , phrase)
import random


def lancer_de():
    de = random.randint(1, 6)
    return de


def lancer_5_de():
    liste_5_de = []
    for i in range(5):
        liste_5_de.append(lancer_de())
    return liste_5_de


def verification(liste_5_de):
    occurences = [0, 0, 0, 0, 0, 0]
    for de in liste_5_de:
         occurences[de-1] += 1
    print(liste_5_de, occurences)
    for occurence in occurences:
        if occurence == 5:
            print("YAM'S")
            return 3
    for occurence in occurences:
        if occurence == 3:
            for occurence2 in occurences:
                if occurence2 == 2:
                    print("FULL")
                    return 2
            print("BRELAN")
            return 1
    print("Rien...")
    return 0


def choix_de(liste_5_de):
    liste_booleen = []
    for de in liste_5_de:
        resultat = input(f"Voulez-vous relancer le dé {de} ? ")
        if resultat == "oui" or resultat == "o":
            liste_booleen.append(True)
        elif resultat == "non" or resultat == "n":
            liste_booleen.append(False)
    print(liste_booleen)
    return liste_booleen


def second_tir(liste_booleen, liste_5_de):
    for i in range(len(liste_5_de)):
        if liste_booleen[i] == True:
            liste_5_de[i] = lancer_de()
    return liste_5_de


def main():
    print("\n---- YAHTZEE ----\n")
    resultat_lancer_5_de = lancer_5_de()
    verification(resultat_lancer_5_de)
    resultat_choix = choix_de(resultat_lancer_5_de)
    resultat_lancer_5_de_2 = second_tir(resultat_choix, resultat_lancer_5_de)
    verification(resultat_lancer_5_de_2)

main()
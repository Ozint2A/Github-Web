import random

nombreSecret = random.randint(1, 20)

for loop in range(nombreSecret):
    tentative = int(input("Devinez le nombre secret : "))
    if tentative > nombreSecret:
        print("Ce nombre est trop grand, ré-essayez !")
    elif tentative < nombreSecret:
        print("Ce nombre est trop petit, ré-essayez !")
    else:
        print("Félicitations, vous avez gagné !")
    break   
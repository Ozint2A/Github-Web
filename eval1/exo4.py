import random

nombre_secret = random.randint(1, 20)
nb_tentatives = int(input("nombre de tentatives ? "))

for loop in range(nb_tentatives):
    tentative = int(input("Devinez le nombre secret "))

    if tentative > nombre_secret:
        print("Ce nombre est trop grand, ré-essayez !")
    elif tentative < nombre_secret:
        print("Ce nombre est trop petit, ré-essayez !")
    else:
        print("Félicitations, vous avez gagné !")
        break
else:
    print("Comme un grand Homme a dit : celui qui se lève tôt, ne voit pas le lézard se brosser les dents.")

import random

nombre_secret = random.randint(1, 10)

for nombre_fois in range(nombre_secret):
    
    tentative = int(input("Devinez le nombre secret :"))
    if tentative > nombre_secret:
        print("le chiffre et trop grand")
    elif tentative < nombre_secret:
        print(" le chiffre et trop petit")
    else:
        print("vous avez gagner !")
    
    
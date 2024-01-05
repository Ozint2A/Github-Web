def filtrer_emails(nb_emails, sujet, titres_emails):
    sujets_filtrés = []

    for i in range(nb_emails):
        titre_email = titres_emails[i]
        debut_crochet = titre_email.find("[")
        fin_crochet = titre_email.find("]")

        if debut_crochet != -1 and fin_crochet != -1:
            sujet_email = titre_email[debut_crochet + 1 : fin_crochet]
            if sujet_email == sujet:
                sujets_filtrés.append(titre_email)

    return sujets_filtrés

# Entrées utilisateur
nb_emails = int(input("Entrez le nombre d'emails : "))
sujet = input("Entrez le sujet à rechercher : ")

titres_emails = []
for i in range(nb_emails):
    titre = input(f"Entrez le titre de l'email {i+1} : ")
    titres_emails.append(titre)

# Appel de la fonction
resultat_filtrage = filtrer_emails(nb_emails, sujet, titres_emails)

# Affichage des résultats
if resultat_filtrage:
    print(f"Les emails avec le sujet [{sujet}] sont :")
    for titre in resultat_filtrage:
        print(titre)
else:
    print(f"Aucun email avec le sujet [{sujet}] n'a été trouvé.")

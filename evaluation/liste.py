identifiants = ["admin", "toto", "foo"]
mots_de_passe = ["admin", "titi", "bar"]

    
def lister_identifiants():
    for id in identifiants:
        print(f"{id}")    
    
 
def creer_un_compte(nouveau_identifiants, nouveau_mots_de_passe):  
   if nouveau_identifiants not in identifiants:
        nouveau_identifiants = identifiants.append(nouveau_identifiants)
        nouveau_mots_de_passe = mots_de_passe.append(nouveau_mots_de_passe)
    
   
# def se_connecter():


    
     
                   
def main():
    print("---- Fonction principal ----")
    creer_un_compte()
    lister_identifiants()
 
main()

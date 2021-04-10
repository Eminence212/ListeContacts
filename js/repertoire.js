
//Affichage de l'image vennant de file
const filePhoto=document.getElementById("photo")
    filePhoto.addEventListener('change',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(filePhoto.files && filePhoto.files[0]){
        const element=document.getElementById("photoProfil")
        element.src=URL.createObjectURL(filePhoto.files[0])
        element.style.backgroundSize="cover"
    }

});

//Réinitialisation de l'image
const reinit=document.querySelector(".boutons > button[type='reset']")
reinit.addEventListener('click',(e)=>{
    const resetFile = document.getElementById("photo")
    const reset = document.getElementById("photoProfil")
    const textgroupe = document.getElementById("groupe")
    reset.src="/img/avatar.png"
})

//Ajout des contacts à la liste des conacts
let tabContacts = []
let tabsupprimer=[]

let createContact=(objets)=>{
    const listContact = document.getElementById('corpListContact') 
    let contacts = document.createElement('div')
        contacts.classList.add('flex-row')
        
    let imgAvatar = document.createElement('img')
    imgAvatar.src = objets.photo
    imgAvatar.alt = 'profil'
    imgAvatar.classList.add('col-1')

    let detailContact = document.createElement('div')
        detailContact.classList.add('col-2')

    let prenomNom = document.createElement('p')
        prenomNom.innerText = objets.prenom + " "+objets.nom
    
    let btnSupprimer = document.createElement('div')
        btnSupprimer.classList.add('supprimer')
    
    let groupe = document.createElement('p')
        groupe.innerText = objets.groupe
    
    let bio = document.createElement('p')
        bio.innerText = objets.bio
    
    detailContact.appendChild(prenomNom)
    detailContact.appendChild(btnSupprimer)
    detailContact.appendChild(groupe)
    detailContact.appendChild(bio)

    contacts.appendChild(imgAvatar)
    contacts.appendChild(detailContact)

    listContact.appendChild(contacts)
    return document.querySelectorAll('.flex-row .supprimer')
}

const btnCreer=document.querySelector(".boutons > #creerContact")
let k = 0
btnCreer.addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()

    let textPrenom = document.getElementById('prenom')
    let textNom = document.getElementById('nom')
    let textGroupe = document.getElementById('groupe')
    let textBio = document.getElementById('biographie')
    let lienPhoto = document.getElementById('photo')
    
    if(lienPhoto.files && lienPhoto.files[0] &&
        textPrenom.value && textPrenom != "" &&
        textNom.value && textNom != "" &&
        textGroupe.value && textGroupe != "" &&
        textBio.value && textBio !=""){

        lienPhoto = URL.createObjectURL(lienPhoto.files[0])
        textPrenom=textPrenom.value
        textNom=textNom.value
        textGroupe=textGroupe.value
        textBio=textBio.value
        
        let contactObjet={
            prenom : textPrenom,
            nom : textNom,
            groupe : textGroupe,
            bio : textBio,
            photo : lienPhoto
        } 
        //Création du contact
    tabContacts.push(contactObjet)
    addEvenCross(createContact(contactObjet))
    }else{
       alert('Entrez tous les éléments')
    }
 
  
  
    
   
})

//Suppression des contacts

let addEvenCross = (element)=>{
    let repertoie = document.getElementById('corpListContact')
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click',(e) =>{
            repertoie.removeChild(e.path[2])
        })
        
    }
 
}

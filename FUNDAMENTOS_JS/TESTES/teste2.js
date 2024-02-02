const add = document.getElementById("addContact")
const remove = document.getElementById("removeContact")

function addContact(){
    const contactSection = document.getElementById("contact-list")
    
    const h3 = document.createElement("h3")
    h3.innerText = "Contato"

    const ul = document.createElement("ul")
    ul.id = "lista"
    const nameLi = document.createElement("li")
    nameLi.innerText = "Nome: ";    
    
    const nameLabel = document.createElement('label');
    nameLabel.for = "0-2"
    nameLabel.innerText = "0-2 anos"

    console.log(nameLabel)

    const nameInput = document.createElement('input');
    nameInput.type = "radio"
    nameInput.value = "0-2"
    nameInput.name ="fullname"

    nameLi.appendChild(nameInput)
    nameLi.appendChild(nameLabel)
    ul.appendChild(nameLi)


    contactSection.append(h3,ul)
}

function removeContact(){
    const contactSection = document.getElementById("contact-list")
    const list = document.getElementById("lista")

    contactSection.removeChild(list)
    console.log(contactSection)
}

add.addEventListener("click", addContact)
remove.addEventListener("click",removeContact)
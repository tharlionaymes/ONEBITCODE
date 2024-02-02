const add = document.getElementById("addTech")
//const remove = document.getElementById("removeContact")

function addTech(){

    const divAddTech = document.getElementById("div-addTech")
    const div = document.createElement("div")
    divAddTech.appendChild(div)

    const techLabel = document.createElement("label")
    techLabel.for = "addTech2"
    techLabel.innerText = "Tecnologias: "

    const techInput = document.createElement("input")
    techInput.type = "text"
    techInput.id = "technology"
    techInput.name = "technology"
    techInput.required = true

    div.appendChild(techLabel)
    div.appendChild(techInput)

    
    const nameLabel02 = document.createElement('label');
    nameLabel02.for = "0-2"
    nameLabel02.innerText = "0-2 anos "

    const nameInput02 = document.createElement('input');
    nameInput02.type = "radio"
    nameInput02.value = "0-2"
    nameInput02.name ="opcao"

    div.appendChild(nameInput02)
    div.appendChild(nameLabel02)

    const nameLabel34 = document.createElement('label');
    nameLabel34.for = "3-4"
    nameLabel34.innerText = "3-4 anos "

    const nameInput34 = document.createElement('input');
    nameInput34.type = "radio"
    nameInput34.value = "3-4"
    nameInput34.name ="opcao"

    div.appendChild(nameInput34)
    div.appendChild(nameLabel34)
    
    const nameLabel5 = document.createElement('label');
    nameLabel5.for = "5"
    nameLabel5.innerText = "5+ anos "

    const nameInput5 = document.createElement('input');
    nameInput5.type = "radio"
    nameInput5.value = "5"
    nameInput5.name ="opcao"

    div.appendChild(nameInput5)
    div.appendChild(nameLabel5)

    const button = document.createElement("button")
    button.innerText = "Remover"
    button.type = "button"

    div.appendChild(button)

    //const remove = document.getElementsByClassName("removeTech")
    
    function removeTech(){
    const divParent = document.getElementById("div-addTech")
    const removeDivTech = document.getElementById("div-inside")
    divParent.removeChild(removeDivTech)

    }
    //remove.addEventListener("click", removeTech)
    

    div.append(document.createElement("br"))
    div.append(document.createElement("br"))
}

/*function removeContact(){
    const contactSection = document.getElementById("contact-list")
    const list = document.getElementById("lista")

    contactSection.removeChild(list)
    console.log(contactSection)
}
*/

add.addEventListener("click", addTech)
//remove.addEventListener("click",removeContact)


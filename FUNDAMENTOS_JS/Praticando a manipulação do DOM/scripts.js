function addContact() {
   const contactSection = document.getElementById('contacts-list')
   
   const h3 = document.createElement('h3')
   h3.innerText = "Contato"

   const ul = document.createElement('ul')
   
   const nameLi = document.createElement('li')
   nameLi.innerText = "Nome: "
   const nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.name = "fullname"
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
   phoneLi.innerText = "Telefone: "
   const phoneInput = document.createElement('input')
    phoneInput.type = "text"
    phoneInput.name = "phone"
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = "text"
    addressInput.name = "phone"
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))    

   contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById("contacts-list")

    const titles = document.getElementsByTagName("h3")

    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}

function addContact() {
    // Obtém a referência para a seção com o ID 'contacts-list'
    const contactSection = document.getElementById('contacts-list');
  
    // Criação do elemento <h3> para o título "Contato"
    const h3 = document.createElement('h3');
    // Define o texto do <h3> como "Contato"
    h3.innerText = "Contato";
  
    // Criação do elemento <ul> para a lista de campos do formulário
    const ul = document.createElement('ul');
  
    // Adição do campo de Nome
    const nameLi = document.createElement('li');
    // Define o texto do <li> como "Nome: "
    nameLi.innerText = "Nome: ";
    // Criação do elemento <input> para o campo de texto 'Nome'
    const nameInput = document.createElement('input');
    // Define o tipo do input como 'text'
    nameInput.type = 'text';
    // Define o atributo 'name' como 'fullname'
    nameInput.name = 'fullname';
    // Adiciona o campo de texto 'Nome' ao <li>
    nameLi.appendChild(nameInput);
    // Adiciona o <li> ao <ul>
    ul.appendChild(nameLi);
    
    // Adição de uma quebra de linha
    ul.appendChild(document.createElement('br'));
  
    // Adição do campo de Telefone
    const phoneLi = document.createElement('li');
    // Define o texto do <li> como "Telefone: "
    phoneLi.innerText = "Telefone: ";
    // Criação do elemento <input> para o campo de texto 'Telefone'
    const phoneInput = document.createElement('input');
    // Define o tipo do input como 'text'
    phoneInput.type = 'text';
    // Define o atributo 'name' como 'phone'
    phoneInput.name = 'phone';
    // Adiciona o campo de texto 'Telefone' ao <li>
    phoneLi.appendChild(phoneInput);
    // Adiciona o <li> ao <ul>
    ul.appendChild(phoneLi);
  
    // Adição de uma quebra de linha
    ul.appendChild(document.createElement('br'));
  
    // Adição do campo de Endereço
    const addressLi = document.createElement('li');
    // Criação de um <label> para o campo de Endereço
    addressLi.innerHTML = '<label for="address">Endereço: </label>';
    // Criação do elemento <input> para o campo de texto 'Endereço'
    const addressInput = document.createElement('input');
    // Define o tipo do input como 'text'
    addressInput.type = 'text';
    // Define o atributo 'name' como 'address'
    addressInput.name = 'address';
    addressInput.id = 'address';
    // Adiciona o campo de texto 'Endereço' ao <li>
    addressLi.appendChild(addressInput);
    // Adiciona o <li> ao <ul>
    ul.appendChild(addressLi);
  
    // Adição de uma quebra de linha
    ul.appendChild(document.createElement('br'));
  
    // Adição de <h3> e <ul> à seção de contatos
    contactSection.append(h3, ul);
  }
  
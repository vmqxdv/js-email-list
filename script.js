/**
 * 
 * Attraverso l'apposita API di Boolean
 * https://flynn.boolean.careers/exercises/api/random/mail
 * generare 10 indirizzi email e stamparli in pagina all'internodi una lista.
 * 
 */

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailList = document.getElementById('email-list');
const generateEmailsButton = document.getElementById('generate-emails');


generateEmailsButton.addEventListener('click', function() {
  generateEmailsButton.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Aggiorna';

  addNewRandomEmailToList(emailList, 10);
});


function addNewRandomEmailToList(listElement, amount) {
  let elementsToAdd = '';
  const requests = [];

  for (let i = 0; i < amount; i++) {
    const request = axios.get(endpoint)
      .then(result => {
        const { response: newEmail } = result.data;
        elementsToAdd += `<li class="list-group-item">${newEmail}</li>`;
      })
      .catch(err => {
        console.log(err);
      });

    requests.push(request);
  };

  Promise.all(requests).then(() => listElement.innerHTML = elementsToAdd);
};
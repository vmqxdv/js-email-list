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

addNewRandomEmailToList(emailList, 10);



function addNewRandomEmailToList(listElement, amount) {
  let elementsToAdd = '';
  const requests = [];

  for (let i = 0; i < amount; i++) {
    const request = axios.get(endpoint)
      .then(result => {
        const { response: newEmail } = result.data;
        elementsToAdd += `<li>${newEmail}</li>`;
      })
      .catch(err => {
        console.log(err);
      });

    requests.push(request);
  };

  Promise.all(requests).then(() => listElement.innerHTML = elementsToAdd);
};
/**
 * 
 * Attraverso l'apposita API di Boolean
 * https://flynn.boolean.careers/exercises/api/random/mail
 * generare 10 indirizzi email e stamparli in pagina all'internodi una lista.
 * 
 */

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailList = document.getElementById('email-list');

addNewRandomEmailToList(emailList, 10);




function addNewRandomEmailToList(listElement, amount) {
  for (let i = 0; i < amount; i++) {

    axios.get(endpoint)
      .then(result => {
        const { response: newEmail } = result.data;

        const newEmailElement = `<li>${newEmail}</li>`;
        
        listElement.innerHTML += newEmailElement;
      }).catch(err => {
        console.log(err);
      });
  
  }
};
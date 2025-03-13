/**
 * 
 * Attraverso l'apposita API di Boolean
 * https://flynn.boolean.careers/exercises/api/random/mail
 * generare 10 indirizzi email e stamparli in pagina all'internodi una lista.
 * 
 */

const endpoing = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailList = document.getElementById('email-list');

axios.get(endpoing)
  .then(result => {

    const { response: newEmail } = result.data;

    const newEmailElement = `<li>${newEmail}</li>`;
    emailList.innerHTML += newEmailElement;

  }).catch(err => {
    console.log(err);
  });
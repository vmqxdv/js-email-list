/**
 * 
 * Attraverso l'apposita API di Boolean
 * https://flynn.boolean.careers/exercises/api/random/mail
 * generare 10 indirizzi email e stamparli in pagina all'internodi una lista.
 * 
 */

const endpoint = 'https://flynn.boolean.careers/exercises/addddpi/random/mail';
const card = document.querySelector('.card');
const cardTitle = document.querySelector('.card-title');
const emailList = document.getElementById('email-list');
const generateEmailsButton = document.getElementById('generate-emails');
const errMessage = document.getElementById('error-message');
const errButton = document.getElementById('reload-page');

let isFirstClick = true;

generateEmailsButton.addEventListener('click', function() {
  if (isFirstClick) {
    cardTitle.classList.add('d-none');
    generateEmailsButton.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Aggiorna';
    isExecuted = false;
  };

  disableButtonForBuffer(generateEmailsButton);
  addNewRandomEmailToList(emailList, 10);
});

errButton.addEventListener('click', function() {
  window.location.reload();
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

        card.classList.add('d-none');
        errMessage.classList.remove('d-none');
      });

    requests.push(request);
  };

  Promise.all(requests).then(() => {
    listElement.innerHTML = elementsToAdd
    disableButtonForBuffer(generateEmailsButton);
  });
};


function disableButtonForBuffer(button) {
  button.disabled ? button.disabled = false : button.disabled = true;
};
const adviceIDZone = document.querySelector('[data-id="advice-id"]');
const adviceZone = document.querySelector('.advice');
const randomAdviceButton = document.querySelector('.btn');
const advice_API = 'https://api.adviceslip.com/advice';

let seconds = 0;
let secondsToNewAdvice = 3;
createAdvice();

//Timer to know when the API create a newAdvice
setInterval(() => {
  seconds++
}, 1000);

randomAdviceButton.addEventListener('click', function () {
  if (seconds < secondsToNewAdvice) {
    alert('You must wait at least two seconds between advices.');
    return;
  };

  createAdvice();
});

function createAdvice() {

  //If there's a advice then delete it.
  if (adviceIDZone.hasChildNodes() && adviceZone.hasChildNodes()) {
    adviceIDZone.childNodes.forEach(child => child.remove());
    adviceZone.childNodes.forEach(child => child.remove());
  };

  fetch(advice_API)
  //Json turn the API value into a Null Object.
  .then(response => response.json())
  .then((container) => {
    //Turn the null object into a normal object.
    Object.setPrototypeOf(container, Object.prototype);
    let adviceContainer = container.slip;
    let adviceValue = adviceContainer.advice;
    let adviceIDValue = adviceContainer.id;

    let adviceID = document.createTextNode(adviceIDValue);
    let advice = document.createTextNode(adviceValue);

    adviceIDZone.append(adviceID);
    adviceZone.append(advice);
  });

  seconds = 0;
};
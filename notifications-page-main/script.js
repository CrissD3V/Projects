const numberOfNotis = document.querySelector('[data-id="notifications-number"]');
const markAsReadBtn = document.querySelector('[data-id="btn"]');
const unreadNotis = document.querySelectorAll('.unread');
const unreadAdvices = document.querySelectorAll('.unread-advice');

let totalUnreadNotis = unreadNotis.length;

numberOfNotis.textContent = totalUnreadNotis;

markAsReadBtn.addEventListener('click', readAllNotis);
unreadNotis.forEach(notification => notification.addEventListener('click', readNoti));

function readNoti() {
  this.classList.remove('unread');

  unreadAdvices.forEach((advice) => {
    if (advice.getAttribute('data-number') === this.getAttribute('data-number')) {
      advice.remove();
      return;
    };
  });

  totalUnreadNotis--

  if (totalUnreadNotis === 0) {
    numberOfNotis.remove();
  } else {
    numberOfNotis.textContent = totalUnreadNotis;
  };
};

function readAllNotis() {
  unreadNotis.forEach(notification => notification.classList.remove('unread'));
  unreadAdvices.forEach(advice => advice.remove());
  numberOfNotis.remove();
};
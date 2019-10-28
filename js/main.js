const subscriptionFormEl = document.querySelector('#subscriptionForm');
const targetEl = document.querySelector('#walk');

function openForm() {
    document.body.className = 'overflow-hidden';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    subscriptionFormEl.className = 'subscription-form';
}

function closeForm() {
    subscriptionFormEl.className = 'display-none';
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
    document.body.classList.remove('overflow-hidden');
}
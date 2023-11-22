import throttle from 'https://cdn.skypack.dev/lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('[name="email"]');
  const messageInput = feedbackForm.querySelector('[name="message"]');

  // Funkcja do zapisywania stanu formularza w local storage
  const saveFormState = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  // Funkcja do wczytywania stanu formularza z local storage
  const loadFormState = () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      const formData = JSON.parse(storedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  };

  // Funkcja do czyszczenia stanu formularza i local storage po wysłaniu formularza
  const clearFormState = () => {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    console.log('Form data submitted:', {
      email: emailInput.value,
      message: messageInput.value,
    });
  };

  // Dodanie obsługi zdarzenia input dla pól formularza
  emailInput.addEventListener('input', saveFormState);
  messageInput.addEventListener('input', saveFormState);

  loadFormState();

  // Dodanie obsługi zdarzenia submit dla formularza
  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearFormState();
  });
});

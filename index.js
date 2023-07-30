const eyeIcons = document.querySelectorAll('.eye-icon');
const passwordInputs = document.querySelectorAll('.password');

eyeIcons.forEach((icon,i) => {
  icon.addEventListener('click', function () {
    const passwordInput = passwordInputs[i];
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
});



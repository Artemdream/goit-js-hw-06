const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
   event.preventDefault();

   const {elements: {email, password}} = event.currentTarget;
 
   if (!email.value ||
       !password.value) {
    return alert("Всі поля повинні бути заповнені!");
   }
   
   const formData = { 
      mail: email.value,
      password: password.value 
   };

   console.log(formData);   
   form.reset()
};


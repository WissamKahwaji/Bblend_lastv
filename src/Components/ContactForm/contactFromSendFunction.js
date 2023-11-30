export const sendEmail = (e, emailjs, form) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_3463lht",
      "template_jfsi1po",
      form.current,
      "oehqiRaB7701snFdq"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

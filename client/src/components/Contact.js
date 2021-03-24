import React from 'react';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_akrpifq',
        'contact_form',
        e.target,
        'user_7KHgsIvrALIZkMviOG62X'
      )
      .then(
        ((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        })
      );
  }
  return (
    <form className='contact-div' onSubmit={sendEmail}>
      <h2 className='contact-title title-section'>Contact </h2>
      <div className='mb-3 form-position'>
        <label for='exampleName' className='form-label'>
          NAME
        </label>
        <input
          type='name'
          className='form-control'
          id='exampleName'
          placeholder='Name'
          name='user_name'
        />
      </div>
      <div className='mb-3'>
        <label for='exampleEmail' className='form-label'>
          EMAIL ADDRESS
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleEmail'
          placeholder='Email'
          name='user_email'
        />
      </div>
      <div className='mb-3'>
        <label for='exampleForm' className='form-label'>
          MESSAGE
        </label>
        <textarea
          className='form-control'
          id='exampleForm'
          rows='3'
          placeholder='Message'
          name='message'
        ></textarea>
      </div>
      <button type='submit' class='btn btn-outline-info' value='Send'>
        SUBMIT
      </button>
    </form>
  );
};

export default Contact;

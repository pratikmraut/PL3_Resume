function validate(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('textarea').value;
    const pattern =  "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
  if(name != '')
  {
      if(email != '')
      {
          if(textarea != '')
          {
              if(!email.match(pattern))
              {
                  alert('Please enter correct email');
                  return false;
              }
              alert('Form submitted successfully');
              return true;
          }
          else
          {
              alert('Please write the response');
              return false;
          }
      }
      else
          alert('Please enter email');
          return false;
  }
  else
  {
      alert('Please enter email');
      return false;
  }
  console.log(name + ' '+ email + ' ' + textarea)
}
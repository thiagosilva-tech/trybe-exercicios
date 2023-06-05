const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  function addProperty(object, key, value){
    if(typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  addProperty(customer, 'email', 'roberto@email.com');
  addProperty(customer, 'fone', '99999-8888');
  addProperty(customer, 'userGithub', 'roberto22');
  addProperty(customer, 'linkedIn', 'linkedin.com/roberto22');
  
  console.log(customer);
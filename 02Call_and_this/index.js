function setUserName(username) {
  //complex DB operations

  this.usename = username;
  console.log(`setUserName Called`);
}

function createUser(username, email, passward) {
  //without passing this it will remove both called and excecution context
  setUserName.call(this, username);
  this.email = email;
  this.passward = passward;
}

const user = new createUser("shubham", "spawar.abs@org", "Pass@123");

console.log(user);

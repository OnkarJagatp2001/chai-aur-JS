const User = {
  name: "chai",
  email: "chai.abs@gmail.com",
  fun: function () {
    return `User name is ${this.name} and email is ${this.email}`;
  },
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
  TeachingSupportFunction: function () {
    console.log(`Teaching Support is ${this.isAvailable}`);
  },
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};
//Teacher la User cha acess bhetala
Teacher.__proto__ = User;
// TeachingSupport la Teacher cha access bhetala
Object.setPrototypeOf(TeachingSupport, Teacher);
// TASupport la TeachingSupport cha access bhetala
Object.setPrototypeOf(TASupport, TeachingSupport);

//   TASupport.TeachingSupportFunction();

//   console.log(TeachingSupport.makeVideo)

let newObject = Object.setPrototypeOf(Teacher, User);

console.log(newObject.email);
let anotherUserName = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

// "Shubham".trueLength();

// "Yogesh".trueLength();

// anotherUserName.trueLength();

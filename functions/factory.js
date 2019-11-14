// Factory Functions

const userName = 'echo';
const avatar = 'echo.png';

const user = {
  // If you have variables in-scope with the same name as your intended property names, you can omit the colon and the value in the object literal creation:
  userName,
  avatar,

  //Object literals support concise method syntax. We can add a .setUserName() method:
  setUserName(userName) {
    this.userName = userName;
    return this;
  }
};
console.log(user);
// { "avatar": "echo.png",   "userName": "echo" }

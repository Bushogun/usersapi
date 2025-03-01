class User {
    constructor(id, email, password, firstName, lastName, role) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
    }
  }
  module.exports = User;
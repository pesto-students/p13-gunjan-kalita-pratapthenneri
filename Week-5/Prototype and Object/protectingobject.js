const person = {
  _name: "John",
  _email: "john@example.com",
  _age: undefined,

  getAge() {
    return this._age;
  },

  setAge(age) {
    this._age = age;
  },
};

console.log(person._name);
console.log(person._email);
person.setAge(30);
console.log(person.getAge());
person._name = "Jane";
console.log(person._name);

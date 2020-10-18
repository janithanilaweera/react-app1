var Person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
  set lang2(a) {
    this.language = a.toUpperCase();
  },

  fName(name) {

      this.firstName=name;

  }
};
export default Person;

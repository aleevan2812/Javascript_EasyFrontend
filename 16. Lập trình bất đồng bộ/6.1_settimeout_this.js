const student = {
  name: "Easy Frontend",
  normal() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
  arrow: () => {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },

  timeoutNormal() {
    console.log("OUTER THIS", this);
    setTimeout(function () {
      console.log("NAME", this.name);
      console.log("THIS", this);
    });
  },
  timeoutArrow() {
    console.log("OUTER THIS", this);
    setTimeout(() => {
      console.log("NAME", this.name);
      console.log("THIS", this);
    });
  },
};

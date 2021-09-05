const noteBook = {
  subject: "Programming",
  pageCount: "180 pages",
  design: {
    frontSide: "web illustration",
    backside:"printing details",
  },
  count: function () {
    console.log(this.pageCount);
  }
}
console.log("This is my", noteBook.subject, "notebook.")
noteBook.count();
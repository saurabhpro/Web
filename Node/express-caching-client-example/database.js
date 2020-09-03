class Database {
  databaseStore = {
    ["index.html"]: "<html>Hello, Saurabh</html>",
  };

  get = (key, callback) => {
    setTimeout(() => {
      callback(this.databaseStore[key]);
    }, 3000);
  };
}

export default Database;

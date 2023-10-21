const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.writeFile("Hello.txt", "Hello ffrom node module of fs", (err)=>{
//     if(err) throw err;
//     console.log("The file has been saved");
// })

fs.readFile("./message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
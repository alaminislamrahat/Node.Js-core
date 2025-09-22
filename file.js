const { error } = require('console')
const fs = require('fs')

// fs.writeFileSync("./test.txt","hello from test file");

// fs.writeFile("./test.txt","hello from test file",(error)=>{})

//    const result = fs.readFileSync("./contact.txt","utf-8");
//    console.log(result)

// fs.readFile("./contact.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(result)
//     }
// })


// fs.appendFileSync("./test.txt",`hey there\n`)
const os = require("os")
console.log(os.cpus().length)
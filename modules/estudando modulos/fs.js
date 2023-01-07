const fs = require("fs");
const path = require("path");


// Criar pasta

fs.mkdir(path.join(__dirname, "/test"), (error)=>{
    if (error)
    {
        return console.log("Error:", error);
    }

    console.log("pasta criada");
}); 
 

// Criar arquivo ou sobescrever um ja existente
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "hello node! I'm a archive! ", (error) => {
    if (error) {
        return console.log("Error:", error);
    }
    console.log("Arquivo criado com sucesso");

    // adicionar conteudo a um arquivo

    fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World!", (error) => {
        if (error) {
            return console.log("Error:", error);
        }
        console.log("Texto adicionado com sucesso");
    });

    // ler um arquivo
    fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
        if (error) {
            return console.log("Error:", error);
        }
        console.log(data);
    });
});


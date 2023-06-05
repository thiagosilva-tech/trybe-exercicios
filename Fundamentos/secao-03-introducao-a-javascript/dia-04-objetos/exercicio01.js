// 1. Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'.`);

// 2. Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
  
  reader.favoriteBooks[1] = {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  };

  console.log(reader.favoriteBooks);

// 3. Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato: 

if(reader.favoriteBooks.length === 1){
    console.log(`${reader.name} tem ${reader.favoriteBooks.length} livro favorito.`);
} else if (reader.favoriteBooks.length > 1) {
    console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);
} else {
    console.log(`${reader.name} não tem livro favorito.`);
}


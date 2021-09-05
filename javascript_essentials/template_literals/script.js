import NoteBook from './notebook.js';

const noteBook = new NoteBook(
  "Front End Development",
  180,
  "https://ih1.redbubble.net/image.524406128.9778/sn,x600-pad,600x600,f8f8f8.u5.jpg"
)

const pageContent = `
<main>
    <h1 >
    ${noteBook.subject}
    </h1>
    <h2>Notebook Subject: ${noteBook.subject}</h2>
    <h2>Page Count:${noteBook.pageCount} pages</h2>
     <img src=${noteBook.indexImage} alt="Notebook" width=200px height=200px />
  </main>
`;
document.body.innerHTML = pageContent;
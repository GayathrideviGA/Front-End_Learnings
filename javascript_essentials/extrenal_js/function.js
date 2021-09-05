  const allheading = document.querySelectorAll("h1");
    for (let item of allheading) {
      item.innerHTML = `&lt;${item.innerHTML}&gt;`;
      console.log(item.innerHTML);
    }
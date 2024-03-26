const bookList = document.getElementById("bookList");
const books = [
  {
    title: "PORTER THE PENGUIN - BOOK 1: THE DESTINY OF DREAMS ",
    dis: `Porter was a penguin who wanted to fly, but his friends didn't think that he would ever succeed.  In the story "LIVING YOUR DREAMS," you'll find out what a dedicated penguin will do to fulfill his dream.  And in the story “NOTHING IS IMPOSSIBLE,” you’ll be motivated to achieve your own dreams.`,
    link: "https://www.amazon.com/PORTER-PENGUIN-Book-Destiny-Dreams/dp/B0CTMWY78S/ref=sr_1_3?dib=eyJ2IjoiMSJ9.tvgRnSLP5iSMTTE6vHRjPElt9EXECUPuplesrQoLUfm5ZVOfcA5g5C5-ncZP3WnG.6yNm5B53JHGLEpt763jad40rIR55Wu-x-LDUKzLR6ck&dib_tag=se&qid=1709527656&refinements=p_27%3ABrent+Mower&s=books&sr=1-3&text=Brent+Mower",
    img: "./assets/imgs/Book1-Destiny.jpg",
  },
  {
    title: "PORTER THE PENGUIN - BOOK 2: THE POWER OF PERSISTENCE",
    dis: `Porter was a penguin who wanted to fly, but his friends didn't think that he would ever succeed.  In the story “THE POWER OF PERSISTENCE,” you'll learn what a little penguin can do to unite his community when disaster strikes.  The story “BEING DIFFERENT” is about being the only penguin who wears glasses.  And in “DIFFERENT IS GOOD,” you’ll learn about the different types of penguins.`,
    link: "https://www.amazon.com/PORTER-PENGUIN-Book-Power-Persistence/dp/B0CV5Q11LJ/ref=sr_1_2?dib=eyJ2IjoiMSJ9.tvgRnSLP5iSMTTE6vHRjPElt9EXECUPuplesrQoLUfm5ZVOfcA5g5C5-ncZP3WnG.6yNm5B53JHGLEpt763jad40rIR55Wu-x-LDUKzLR6ck&dib_tag=se&qid=1709527871&refinements=p_27%3ABrent+Mower&s=books&sr=1-2&text=Brent+Mower",
    img: "./assets/imgs/Book2-Persistence.jpg",
  },
  {
    title: "PORTER THE PENGUIN - BOOK 3: METICULOUS MATHEMATICS",
    dis: `Porter was a penguin who wanted to fly, but his friends didn't think that he would ever succeed.  In the story “THE MARCH OF THE PENGUIN BRIGADE,” you'll learn to count to ten as the penguins march to the playground.  And in the story “TEN CENT HOT DOGS," you'll learn to count by tens with Porter at the carnival.`,
    link: "https://www.amazon.com/PORTER-PENGUIN-Book-Meticulous-Mathematics/dp/B0CVXPQGGR/ref=sr_1_1?dib=eyJ2IjoiMSJ9.tvgRnSLP5iSMTTE6vHRjPElt9EXECUPuplesrQoLUfm5ZVOfcA5g5C5-ncZP3WnG.6yNm5B53JHGLEpt763jad40rIR55Wu-x-LDUKzLR6ck&dib_tag=se&qid=1709527984&refinements=p_27%3ABrent+Mower&s=books&sr=1-1&text=Brent+Mower",
    img: "./assets/imgs/Book3-Mathematics.jpg",
  },
  {
    title: "PORTER THE PENGUIN - BOOK 4: AUDACIOUS ODYSSEY",
    dis: "To Be Announced",
    link: "",
    img: "./assets/imgs/Coming_Soon.jpg",
  },
  {
    title: "PORTER THE PENGUIN - BOOK 5: SANDS OF TIME ",
    dis: "To Be Announced",
    link: "",
    img: "./assets/imgs/Coming_Soon.jpg",
  },
  {
    title: "LESSONS ON POOP",
    dis: `If you’ve ever had a bad day, maybe it’s time to read some LESSONS ON POOP. It starts as a tale about two dogs, Stella and Bubba. It ends with an unfortunate interaction between two neighbors. Read what lessons the author learned in the process. `,
    link: "https://www.amazon.com/Lessons-Poop-Geronimo-Mower/dp/B0CS9RGZM5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.jLJGYd3b2f6L4e0k2IcLbg.ak6udjYOxeyg4LgGmY3Vts3w_AL3br4asiRPpvVO7rg&dib_tag=se&qid=1709529239&refinements=p_27%3AGeronimo+Mower&s=books&sr=1-1&text=Geronimo+Mower",
    img: "./assets/imgs/Book-Poop.jpg",
  },
  {
    title: "APPURTENANCE ",
    dis: `A collection of poems that were written by the author between the years of 1994 and 2007. `,
    link: "https://www.amazon.com/Appurtenance-Brent-Mower/dp/1434897966/ref=sr_1_1?dib=eyJ2IjoiMSJ9.DgRB9sI3zcdWAlT3bOhbOw.TvMcYvTqOGvluQbYYrYtvVWcnPA9ZD4kod5AevjLDYg&dib_tag=se&qid=1709528097&refinements=p_27%3ABrent+E.+Mower&s=books&sr=1-1&text=Brent+E.+Mower",
    img: "./assets/imgs/Book-Appurtenance.jpg",
  },
];

const renderBooks = () => {
  books.forEach((book) => {
    // Create the list item for the book
    const listItem = document.createElement("li");
    listItem.classList = "book";

    // Create where text will be held
    const txtContainer = document.createElement("div");
    txtContainer.classList = "bookTxtContainer";

    // Define img for book
    const img = document.createElement("img");
    img.src = book.img;

    // Define book title
    const title = document.createElement("h3");
    title.textContent = book.title;

    // Define Book discription
    const dis = document.createElement("p");
    dis.textContent = book.dis;

    // Define link to buy book
    const link = document.createElement("a");
    link.href = book.link;
    link.textContent = "Buy Here";
    link.target = "_blank";

    // Append all text items to the txtContainer
    txtContainer.append(title, dis, link);

    // Append all elements to the listItem
    listItem.append(img, txtContainer);

    bookList.appendChild(listItem);
  });
};

renderBooks();

const bioList = document.getElementById("bioList");

const bios = [
  {
    name: "Author: Brent Evan Mower",
    bio: `Brent marches to the beat of his own drum. He was born and raised in West Jordan, Utah, to a large sup-
  portive family with eight boys and one girl. His father instilled in him a love for the outdoors. His mother en-
  couraged him to try new things and to value education. He enjoys creative writing, photoshopping, fried
  
  chicken, farting, basketball, music, and movies (not necessarily in that order). For the past 25 years he has
  been a Social Worker; working with low-income and homeless families. He currently lives in Tooele, Utah,
  with his wife and son.`,
    img: "./assets/imgs/01-Author-Brent.JPG",
  },
  {
    name: "Author: Hayden Kelly Mower",
    bio: `Hayden is from Tooele, Utah. He is an only child, but he has 1 dog (Kobe). When he was younger, he

  would submit his projects into the national Reflections program. His 2007-2008 poem (I Can Make a Differ-
  ence) won at both the school and district levels. Porter was created in 2009. Today he is an adult studying
  
  cyber security in college. He enjoys playing video games and watching professional sports.`,
    img: "./assets/imgs/02-Author-Hayden.jpg",
  },
  {
    name: "Illustrator: Albert Ikenberry",
    bio: `Albert was born in Helper, Utah. At the age of 18 he hopped on a train to see the world. The nomadic life-
  style lead him to a position with the Bertram Family Circus. He spent 30 years feeding and caring for the an-
  imals; with a dream of becoming a lion tamer. He loved his position with the elephants and self-proclaimed
  
  himself as “Super-Pooper-Scooper.” He traveled from the east coast to the west coast multiple times a year,
  stopping in various towns along the way. His primary residence was in Gibsonton, Florida. When Ringling
  Bros. and Barnum & Bailey began retiring the use of live animals in their shows, many circuses were quick to
  follow. Albert saw the writing on the wall and decided to retire before he became obsolete. He now resides
  in Ferron, Utah, where he focuses on his first love of art.`,
    img: "./assets/imgs/03-Illustrator-Albert.jpg",
  },
  {
    name: "Author: Geronimo Ulysses Mower",
    bio: `Geronimo was born in Tabiona, Utah. From a very young age, he demonstrated an artistic talent. He en-
  joyed drawing, coloring, and painting. During the sixth grade, his class chose two of his stories to be made
  
  into books for the Kindergarten classes. As a Junior in high school, he entered a short story in the Reflec-
  tions program titled “Bats On The Brain.” This story won at the school level and moved on to the district lev-
  el, where it lost. During the same year, Geronimo began experimenting with poetry. At first, it was simply
  
  combining rhyming words into amusing phrases that were written in the margins of various library books to
  get a laugh out of the next reader. As a college student, he began writing movie screenplays and hopes to
  someday break into the film industry.`,
    img: "./assets/imgs/04-Author-Geronimo.JPG",
  },
  {
    name: "Author: Abraham Josephus Mower",
    bio: `Abraham was born in Fairview, Utah. His childhood dream of being an astronaut changed after the 1986
  Challenger disaster. He explored many different academic fields and careers, but often felt like he was lost
  on a strange world. He is a self-published author and Facebook fanatic, who spends his free time reading
  Entertainment Weekly (which he refers to as “The Bible”). Bad Luck seems to be his constant companion
  and when it rains, it really pours. In 2002, he survived a near fatal car accident when he was hit by a drunk
  
  driver. As a naturally stubborn person, he refuses to admit defeat in life or death. After spending the major-
  ity of his adulthood in a van down by the river, he is sharing his unique outlook on life through his writings.`,
    img: "./assets/imgs/05-Author-Abraham.jpg",
  },
];

const renderBios = () => {
  bios.forEach((bio) => {
    // Create list item
    const container = document.createElement("li");
    container.classList = "BioContainer";

    // Create img element for bio
    const bioImg = document.createElement("img");
    bioImg.src = bio.img;

    // Create container to make styling text elements easier
    const txtContainer = document.createElement("div");
    txtContainer.classList = "bioTxtContainer";

    const bioName = document.createElement("h3");
    bioName.textContent = bio.name;
    const bioBody = document.createElement("p");
    bioBody.textContent = bio.bio;

    txtContainer.append(bioName, bioBody);

    container.append(bioImg, txtContainer);

    bioList.appendChild(container);
  });
};

renderBios();

type Org = {
  name: string;
  logo: string;
};

import freeCode from "../images/org/freeCodeCamp.webp";
import jjs from "../images/org/just-javascript.webp";
import microsoft from "../images/org/microsoft.webp";
import triplebyte from "../images/org/triplebyte.webp";
import udemy from "../images/org/udemy.webp";

/* Organizations */

// const LinkedIn: Org = {
//   name: "LinkedIn",
//   logo: "/img/org/linkedin.png",
// };

const Udemy: Org = {
  name: "Udemy",
  logo: udemy,
};

const freeCodeCamp: Org = {
  name: "freeCodeCamp",
  logo: freeCode,
};

const Microsoft: Org = {
  name: "Microsoft",
  logo: microsoft,
};

const JustJavaScript: Org = {
  name: "Just JavaScript",
  logo: jjs,
};

const certificatesData = [
  {
    title: "Just Javascript - by Dan Abramov",
    issuedDate: "Nov, 2022",
    issuedBy: JustJavaScript,
    url: "/assets/certificates/just-javascript.pdf",

    pinned: true,
  },
  {
    title: "The Complete Web Developer in 2022",
    issuedDate: "Sept, 2022",
    issuedBy: Udemy,
    url: "https://www.udemy.com/certificate/UC-56610012-bf1a-4eda-873b-64f86d36bd78/",

    pinned: true,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuedDate: "Aug, 2022",
    issuedBy: freeCodeCamp,
    url: "https://freecodecamp.org/certification/CDi/javascript-algorithms-and-data-structures",

    pinned: true,
  },
  {
    title: "Responsive Web Design",
    issuedDate: "Aug, 2022",
    issuedBy: freeCodeCamp,
    url: "https://freecodecamp.org/certification/CDi/responsive-web-design",

    pinned: true,
  },
  {
    title: "MTA: Introduction to Programming Using JavaScript",
    issuedDate: "June, 2022",
    issuedBy: Microsoft,
    url: "https://www.credly.com/badges/a37551fc-8bc5-4712-9442-8696b0401c32",

    pinned: true,
  },
  {
    title: "MTA: Introduction to Programming Using HTML and CSS",
    issuedDate: "May, 2022",
    issuedBy: Microsoft,
    url: "https://www.credly.com/badges/7c2ee275-1089-4c2e-8f45-39f3fd1eced2",
    pinned: true,
  },
];

export default certificatesData;

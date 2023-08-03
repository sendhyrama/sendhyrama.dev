type Org = {
  name: string;
  logo: string;
};

import freeCode from "../images/org/freeCodeCamp.webp";
import jjs from "../images/org/just-javascript.webp";
import microsoft from "../images/org/microsoft.webp";
import triplebyte from "../images/org/triplebyte.webp";
import udemy from "../images/org/udemy.webp";
import dicoding from "../images/org/dicoding.jpeg";
import skilvul from "../images/org/skilvul.png";
import coursera from "../images/org/coursera.png";
import bangkit from "../images/org/bangkit.jpg";

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

const Dicoding: Org = {
  name: "Dicoding",
  logo: dicoding,
};

const Skilvul: Org = {
  name: "Skilvul",
  logo: skilvul,
};

const Coursera: Org = {
  name: "Coursera",
  logo: coursera,
};

const Bangkit: Org = {
  name: "Bangkit Academy",
  logo: bangkit,
};

const certificatesData = [
  {
    title: "Cloud Computing Path at Bangkit Academy 2023 (Completion)",
    issuedDate: "July, 2023",
    issuedBy: Bangkit,
    url: "/bangkit-certificate.pdf",
    
    pinned: true,
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuedDate: "Mar, 2023",
    issuedBy: Coursera,
    url: "https://coursera.org/share/971a82568c1543bb26c063129c6b8cee",

    pinned: true,
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuedDate: "Mar, 2023",
    issuedBy: Coursera,
    url: "https://coursera.org/share/65860c4451453dcf29c1e775a47210ff",

    pinned: true,
  },
  {
    title: "Belajar Dasar-Dasar DevOps",
    issuedDate: "July, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/NVP7OEG1VPR0",

    pinned: true,
  },
  {
    title: "Belajar Jaringan Komputer untuk Pemula",
    issuedDate: "July, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/NVP7OEG6OPR0",

    pinned: true,
  },
  {
    title: "Menjadi Google Cloud Engineer",
    issuedDate: "May, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/2VX3JY96QPYQ",

    pinned: true,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuedDate: "Mar, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/MRZM405N3XYQ",

    pinned: true,
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuedDate: "Mar, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/QLZ925OJ2X5D",

    pinned: true,
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuedDate: "Mar, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/N9ZO4GNKDZG5",

    pinned: true,
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuedDate: "Feb, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/JLX1LEM32X72",

    pinned: true,
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuedDate: "Feb, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/81P28J07OPOY",

    pinned: true,
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuedDate: "Feb, 2023",
    issuedBy: Dicoding,
    url: "https://www.dicoding.com/certificates/1OP85E942PQK",

    pinned: true,
  },
  {
    title: "Krealogi: UI/UX Challenge (Completion)",
    issuedDate: "Dec, 2022",
    issuedBy: Skilvul,
    url: "https://badgr.com/public/assertions/YWI6DX1VT6qw3xfBY2NiFg?identity__email=sendhyrama@gmail.com",

    pinned: true,
  },
  {
    title: "UI/UX Design Mastery",
    issuedDate: "Oct, 2022",
    issuedBy: Skilvul,
    url: "https://badgr.com/public/assertions/GeyDY4DQTbO0k6aSy1EKIw?identity__email=sendhyrama@gmail.com",
    pinned: true,
  },
];

export default certificatesData;

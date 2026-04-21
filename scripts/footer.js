const body = document.querySelector('body');
const currentYear = new Date().getFullYear();
body.innerHTML += `
  <style>
    footer {
      font-size: 8.0pt;
      text-align: center;
      width: 100%;
      margin-top: 2rem;
    }

    footer span {
      margin: 0 10vw;
      padding: 2rem 0;
    }

    @media only screen and (max-width: 768px) {

    footer span {
      margin: 0 1rem;
    }

  }

  @media only screen and (max-width: 480px) {

    footer span {
      display: block;
    }

  }
    
  </style>
  <footer>
    <span>&copy; ${currentYear} Arcadia Lions Club</span>
    <span>&copy; ${currentYear} Broiler Days Fun Run</span>
  </footer>
`;

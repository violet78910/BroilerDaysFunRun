const head = document.querySelector('head');
head.innerHTML += `
  <style>
    footer {
    font-size: 8.0pt;
    text-align: center;
    width: 100%;
    margin-top: 2em;
  }

  footer span {
    margin: 0 10vw;
    padding: 2em 0;
  }
`;

const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = `
  <span>&copy; ${currentYear} Arcadia Lions Club</span>
  <span>&copy; ${currentYear} Broiler Days Fun Run</span>
`;

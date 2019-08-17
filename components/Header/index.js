// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerArray = ["SMARCH 28, 2019", "Lambda Times", "98°"];

const headerContainer = document.querySelector('.header-container');

function Header(child1, child2, child3) {
  // This will define new elements:
  const header = document.createElement('div');
  const span1 = document.createElement('span');
  const h1Header = document.createElement('h1');
  const span2 = document.createElement('span');

  // Structuring the elements:
  // Append header to the headerContainer
  headerContainer.appendChild(header);
  header.appendChild(span1);
  header.appendChild(h1Header);
  header.appendChild(span2);

  // Set class names
  header.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp');

  // Set text content
  span1.textContent = child1;
  h1Header.textContent = child2;
  span2.textContent = child3;

  return header;
}

Header(headerArray[0], headerArray[1], headerArray[2]);

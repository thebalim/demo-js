const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
];


const menuContent = document.getElementById('menu-content');
const filterBtns = document.getElementById('filterBtns');
const buttons = filterBtns.getElementsByClassName('btn');

function renderMenu(data) {
    // del content
    delContent();

    let ul = document.createElement('ul');

    data.forEach((list) => {
        let li = document.createElement('li');
        li.innerText = list;
        ul.appendChild(li);
    })
    menuContent.append(ul);
}

renderMenu(content[0]);

// del function
function delContent(event) {
    menuContent.innerHTML = "";
}

// event for rendering menu with buttons
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', () => {
        renderMenu(content[i]);
    });
}

// event for setting the button active 
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function() {
        let current = document.getElementsByClassName(' active')[0];
        current.className = current.className.replace(' active', "");

        this.className += " active";
    })
}
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const teamContainer = document.querySelector('.team-container');

let memberName;
let memberRole;
let memberPhoto;


for (let i = 0; i < teamMembers.length; i++) {

    let card = document.createElement('div')

    memberName = teamMembers[i]['nome'];
    memberRole = teamMembers[i]['ruolo'];
    memberPhoto = teamMembers[i]['foto'];

    card.classList.add('team-card');

    card.innerHTML = `
        <div class="card-image">
            <img src="img/${memberPhoto}" alt="${memberName}" />
        </div>
        <div class="card-text">
            <h3>${memberName}</h3>
            <p>${memberRole}</p>
        </div>`

    teamContainer.appendChild(card);
}

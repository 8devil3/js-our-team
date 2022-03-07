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
const btnAdd = document.querySelector('#addMemberButton');
const inputName = document.querySelector('#name');
const inputRole = document.querySelector('#role');
const inputPhoto = document.querySelector('#image');






btnAdd.addEventListener('click', addMember);


// iterazione per i membri noti
for (let i = 0; i < teamMembers.length; i++) {

    let card = document.createElement('div')

    card.classList.add('team-card');

    card.innerHTML = `
        <div class="card-image">
            <img src="../img/${teamMembers[i]['foto']}" alt="${teamMembers[i]['nome']}" />
        </div>
        <div class="card-text">
            <h3>${teamMembers[i]['nome']}</h3>
            <p>${teamMembers[i]['ruolo']}</p>
        </div>`

    teamContainer.appendChild(card);
}




// aggiunta di nuovi membri
function addMember() {
    let newMember = {};
    let card = document.createElement('div')

    //nuovo oggetto membro
    newMember = {
        nome : inputName.value,
        ruolo : inputRole.value,
        foto : inputPhoto.value
    };

    //invio l'oggetto nell'array principale
    teamMembers.push(newMember);

    //stampo la card
    card.classList.add('team-card');
    card.innerHTML = `
        <div class="card-image">
            <img src="../img/${newMember.foto}" alt="${newMember.nome}" />
        </div>
        <div class="card-text">
            <h3>${newMember.nome}</h3>
            <p>${newMember.ruolo}</p>
        </div>`

    teamContainer.appendChild(card);
    
}

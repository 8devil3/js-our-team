const urlImg = 'https://picsum.photos/400/429?random=';

const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: urlImg
    },
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Editor',
        foto: urlImg
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: urlImg
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: urlImg
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: urlImg
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: urlImg
    }
];

const teamContainer = document.querySelector('.team-container');

// iterazione tra i membri
for (let i = 0; i < teamMembers.length; i++) {
    printCards(teamMembers[i], i);
}


function printCards(member, index) {

    let card = document.createElement('div')
    card.classList.add('team-card');

    card.innerHTML = `
    <div class="card-image">
        <img src="${member.foto}${index}" alt="${member.nome}" />
    </div>
    <div class="card-text">
        <h3>${member.nome}</h3>
        <p>${member.ruolo}</p>
    </div>`

    teamContainer.appendChild(card);
}

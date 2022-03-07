const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'https://picsum.photos/370/400?random='
    },
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Editor',
        foto: 'https://picsum.photos/370/400?random='
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'https://picsum.photos/370/400?random='
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'https://picsum.photos/370/400?random='
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'https://picsum.photos/370/400?random='
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'https://picsum.photos/370/400?random='
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

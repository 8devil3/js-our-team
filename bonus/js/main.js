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
const btnAdd = document.querySelector('#addMemberButton');
const inputName = document.querySelector('#name');
const inputRole = document.querySelector('#role');
const inputPhoto = document.querySelector('#image');



btnAdd.addEventListener('click', addMember);


//stampo le card quando carico la pagina. Le card stampate sono quelle nell'array definito all'inizio.
for (let i = 0; i < teamMembers.length; i++) {
    printCards(i);
}



// aggiunta di nuovi membri
function addMember() {
    let newMember = {};
    
    //nuovo oggetto membro
    newMember = {
        nome : inputName.value,
        ruolo : inputRole.value,
        foto : 'https://picsum.photos/370/400?random='
    };
    
    //invio l'oggetto nell'array principale
    teamMembers.push(newMember);
    
    //stampo la nuova card
    printCards(teamMembers.length-1);
}



//stampa card
function printCards(index) {

    let card = document.createElement('div')
    card.classList.add('team-card');

    card.innerHTML = `
    <div class="card-image">
        <img src="${teamMembers[index]['foto']}${[index]}" alt="${teamMembers[index]['nome']}" />
    </div>
    <div class="card-text">
        <h3>${teamMembers[index]['nome']}</h3>
        <p>${teamMembers[index]['ruolo']}</p>
    </div>`

    teamContainer.appendChild(card);
}
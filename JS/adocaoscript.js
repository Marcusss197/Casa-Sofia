document.addEventListener('DOMContentLoaded', (event) => {
    const pets = [
        {
            name: "Peppy",
            type: "dog",
            sex: "boy",
            size: "large",
            breed: "Golden Retriever",
            age: "adult",
            img: "/FILES/voluntario.png",
            description: "Cachorro para adoção, extremamente brincalhão, mas muito bagunceiro, gosta bastante do sushi de pelucia dele",
            link: "pet1.html"
        },
        {
            name: "Princesa",
            type: "dog",
            sex: "girl",
            size: "large",
            breed: "Colmillos",
            age: "adult",
            img: "/FILES/princesa.jpg",
            description: "Uma cachorra mansa, é sociavel com as crianças e desconhecidos, ama carinho e está vacinada e castrada.",
            link: "adocao.html"
        },
        {
            name: "Eevee",
            type: "cat",
            sex: "boy",
            size: "small",
            breed: "Laranja",
            age: "puppy",
            img: "/FILES/zzz.jpg",
            description: "Esse gato só dorme, acorda por 30 minutos pra comer e caga, pra depois fica dormindo",
            link: "adocao.html"
        },
        {
            name: "Sparkle",
            type: "cat",
            sex: "girl",
            size: "medium",
            breed: "Ragdoll",
            age: "adult",
            img: "/FILES/sparkle.jpg",
            description: "Sparkle é muito carente e gosta de ser tratada como uma princesa, onde tudo tem que estar ao seu alcance, desde comida, brinquedo e até seu proprio dono.",
            link: "adocao.html"
        },
        {
            name: "Luna",
            type: "dog",
            sex: "girl",
            size: "small",
            breed: "Pokemon",
            age: "adult",
            img: "/FILES/luna.png",
            description: "Luna cachorro fofa e pequena, fofuxa, linda, pequena, linda",
            link: "adocao.html"
        },
        {
            name: "Max",
            type: "cat",
            sex: "boy",
            size: "large",
            breed: "Listrado",
            age: "adult",
            img: "/FILES/max.png",
            description: "Listradinho e carente, vamo aperta esse fofuxo, uau",
            link: "adocao.html"
        },
        {
            name: "Bella",
            type: "cat",
            sex: "girl",
            size: "medium",
            breed: "Branco",
            age: "adult",
            img: "/FILES/pedropedro.gif",
            description: "isso é um gato?",
            link: "adocao.html"
        },
        {
            name: "Simba",
            type: "dog",
            sex: "boy",
            size: "large",
            breed: "Golden Retriever",
            age: "adult",
            img: "/FILES/simba.png",
            description: "HAAAAAAAAAAAAAAAAAAAAAAA TIMEUNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            link: "adocao.html"
        }
    ];

    function renderPets(pets) {
        const container1 = document.getElementById('card-section-1');
        const container2 = document.getElementById('card-section-2');
        container1.innerHTML = '';
        container2.innerHTML = '';
        
        pets.slice(0, 4).forEach(pet => {
            const petCard = createPetCard(pet);
            container1.appendChild(petCard);
        });

        pets.slice(4, 8).forEach(pet => {
            const petCard = createPetCard(pet);
            container2.appendChild(petCard);
        });
    }

    function createPetCard(pet) {
        const petCard = document.createElement('div');
        petCard.classList.add('card', 'card-adocao');
        petCard.style.width = '18rem';
        
        petCard.innerHTML = `
            <img src="${pet.img}" class="card-img-top" alt="${pet.name}" usemap="#img-direct">
            <map name="img-direct"><area shape="default" href="pet1.html"></area></map>
            <div class="card-body">
                <h5 class="card-title">${pet.name}</h5>
                <p class="card-text">${pet.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${pet.type === 'dog' ? 'Cachorro' : 'Gato'}</li>
                <li class="list-group-item">${pet.sex === 'boy' ? 'Macho' : 'Fêmea'}</li>
                <li class="list-group-item">${pet.size === 'small' ? 'Pequeno porte' : pet.size === 'medium' ? 'Porte Médio' : 'Grande porte'}</li>
                <li class="list-group-item">${pet.breed}</li>
                <li class="list-group-item">${pet.age === 'puppy' ? 'Filhote' : pet.age === 'adult' ? 'Adulto' : 'Idoso'}</li>
            </ul>
        `;
        
        return petCard;
    }

    function filterPets() {
        const petType = document.getElementById('filter-pets').value;
        const petSex = document.getElementById('filter-sex').value;
        const petSize = document.getElementById('filter-size').value;
        const petBreed = document.getElementById('filter-breed').value;
        const petAge = document.getElementById('filter-age').value;

        const filteredPets = pets.filter(pet => {
            return (petType === 'all-pets' || pet.type === petType) &&
                   (petSex === 'all-sex' || pet.sex === petSex) &&
                   (petSize === 'all-size' || pet.size === petSize) &&
                   (petBreed === 'all-breeds' || pet.breed === petBreed) &&
                   (petAge === 'all-age' || pet.age === petAge);
        });

        renderPets(filteredPets);
    }

    document.querySelector('.buscar').addEventListener('click', filterPets);

    renderPets(pets);
});

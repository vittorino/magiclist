// get list of cards
const getCardList = async () => {
  const response = await fetch('json/4ed.json');
  const data = await response.json();

  return (data.cards);
};

// get local collection
const collection = localStorage.getItem('collection').split(',');

// get gallery container and generate template
const gallery = document.querySelector('.gallery');

const generateTemplate = (card, owned) => {
  const html = `
    <div id="${card.multiverseid}" class="card ${card.colors[0].toLowerCase()} ${card.rarity.toLowerCase()} ${owned} bg-light shadow rounded">
    <img src="img/cards/${card.name}.jpg" title="${card.name} (${card.rarity})" width="223px" />
    </div>
  `;

  gallery.innerHTML += html;
}

let owned = "";
getCardList().then(data => {
  data.forEach(function(card){
    // create HTML gallery
    if(collection.includes(card.multiverseid.toString())){
      owned = "owned";
    } else {
      owned = "";
    };
    generateTemplate(card, owned);
  });
  
  // click to mark owned cards
  const boxes = document.querySelectorAll('.card');
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if(!box.classList.contains('owned')){
        box.classList.toggle('owned');
        collection.push(box.id);
        localStorage.setItem('collection', collection.toString());
      } else {
        box.classList.toggle('owned');
        collection.splice(box.id);
      }
    });
  });
});

const filters = document.querySelector('.btn-toolbar');
filters.addEventListener('click', e => {
    const color = e.target.classList[2].toLowerCase();
    e.target.previousSibling.previousSibling.toggleAttribute('checked');
    console.log(color);

    let filtered = gallery.querySelectorAll('.'+color);
    filtered.forEach(selected => {
      selected.classList.toggle('hidden');
    })
    console.log(filtered);
});

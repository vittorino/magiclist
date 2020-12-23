// get list of cards
const getCardList = async () => {
  const response = await fetch('json/4edcards_1.json');
  const data = await response.json();

  return (data.cards);
};

// get reference container
const gallery = document.querySelector('.gallery');

let html = ``;

getCardList().then(data => {
  data.forEach(function(card){
    // create HTML template
    html += `
    <div class="card bg-light shadow rounded m-2">
      <img src="img/cards/${card.name}.jpg" width="223px"/>
    </div>`;
  });
  gallery.innerHTML = html;
});

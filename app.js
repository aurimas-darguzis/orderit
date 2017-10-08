window.onload = function () {

  const lbl_title = document.getElementById('title');
  const sandwitch = document.getElementById('sandwitch');
  const sandwitches = document.getElementById('sandwitches');
  const sandwitch1 = document.getElementById('sandwitch1');
  const sandwitch2 = document.getElementById('sandwitch2');
  const sandwitch3 = document.getElementById('sandwitch3');
  const totalBasket = document.getElementById('totalBasket');

  const title = 'Order it!'
  lbl_title.innerHTML = title;
  sandwitch.innerHTML = 'sandwitch';

  sandwitch.onclick = function(e) { // label `sandwitch`
    e.stopPropagation();
    console.log('show-sandwitch clicked!');
    showSandwitches(); // shows list of sandwitches
  }

  sandwitch1.onclick = function(e) {
    e.stopPropagation();
    console.log(e);
    // console.log(e.dataset.name);
    this.classList.add('selected');
    // addToBasket(this);
  }

  sandwitch2.onclick = function(e) {
    e.stopPropagation();
    this.classList.add('selected');
    addToBasket(this);
  }

  sandwitch3.onclick = function(e) {
    e.stopPropagation();
    this.classList.add('selected');
    addToBasket(this);
  }

  function showSandwitches() {
    sandwitches.classList.remove('hidden');
  }

  function addToBasket(itemToAdd) {
    itemToAdd.classList.add('selected');
    console.log('item to add: ', itemToAdd);

    const itemToAdd2 = 'itemInBasket';
    const item = document.createElement("div");
    // item.innerHTML(itemToAdd)
    // item.classList.add(`${itemToAdd2}`)

    totalBasket.insertAdjacentHTML('afterbegin', item);
    // const test = '<div>labas</div>';
    // totalBasket.appendChild(item);
    // totalBasket.insertAdjacentHTML('afterbegin', item);
  }
}
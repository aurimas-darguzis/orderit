window.onload = function () {

  const lbl_title = document.getElementById('title');
  const sandwitch = document.getElementById('sandwitch');
  const sandwitches = document.getElementById('sandwitches');
  const sandwitch1 = document.getElementById('sandwitch1');
  const sandwitch2 = document.getElementById('sandwitch2');
  const sandwitch3 = document.getElementById('sandwitch3');

  const title = 'Order it!'
  lbl_title.innerHTML = title;
  sandwitch.innerHTML = 'sandwitch';

  sandwitch.onclick = function(e) { // label `sandwitch`
    e.stopPropagation();
    console.log('sandwitch clicked!');
    showSandwitches(); // shows list of sandwitches
  }

  sandwitch1.onclick = function(e) {
    e.stopPropagation();
    this.classList.add('selected');
    addToBasket(this);
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

  sandwitch3.onclick = function(e) {
    e.stopPropagation();
  }

  function showSandwitches() {
    // const sandwitches = ['chicken', 'grain avocado', 'ham'];
    sandwitches.classList.remove('hidden');
    console.log(sandwitches)

  }

  function addToBasket(element) {
    console.log(element);
  }

}
window.onload = function () {

  const lbl_title = document.getElementById('title');
  const sandwitch = document.getElementById('sandwitch');
  const sandwitches = document.getElementById('sandwitches');
  const sandwitch1 = document.getElementById('sandwitch1');

  const title = 'Order it!'
  lbl_title.innerHTML = title;
  sandwitch.innerHTML = 'sandwitch';

  sandwitch.onclick = function(e) {
    e.stopPropagation();
    console.log('sandwitch clicked!');
    showSandwitches();
  }

  sandwitch1.onclick = function(e) {
    e.stopPropagation();
    const sandwitch1 = this;
    addToBasket(sandwitch1);
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
window.onload = function () {

  const lbl_title = document.getElementById('title');
  const sandwitch = document.getElementById('sandwitch');
  const sandwitches = document.getElementById('sandwitches');
  
  const title = 'Order it!'
  lbl_title.innerHTML = title;
  sandwitch.innerHTML = 'sandwitch';

  sandwitch.onclick = function(e) {
    e.stopPropagation();
    console.log('sandwitch clicked!');
    showSandwitches();
  }

  function showSandwitches() {
    // const sandwitches = ['chicken', 'grain avocado', 'ham'];
    sandwitches.classList.remove('hidden');
    console.log(sandwitches)

  }

}
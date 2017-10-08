window.onload = function () {

  const lbl_title = document.getElementById('title');
  const sandwitch = document.getElementById('sandwitch');
  
  const title = 'Order it!'
  lbl_title.innerHTML = title;

  sandwitch.onclick = function(e) {
    e.stopPropagation();
    console.log('sandwitch clicked!');

    
  }

}
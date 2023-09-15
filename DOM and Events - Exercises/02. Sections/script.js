function create(words) {
   let mainDiv = document.getElementById('content');

   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      div.appendChild(p);

      mainDiv.appendChild(div);

      p.style.display = "none";
      div.color = 'blue';

      div.addEventListener("click", displayContent.bind(null, p));
   });


   function displayContent(p) {
      if (p.style.display === 'none') {
          p.style.display = 'block';
      } else {
          p.style.display = 'none';
      }
  }
  
}
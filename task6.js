
const body = document.body;
const paragraph = document.createElement('p');


window.addEventListener('resize', function(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    paragraph.textContent = `Width: ${width}px; height: ${height}px.`;
})

body.appendChild(paragraph);

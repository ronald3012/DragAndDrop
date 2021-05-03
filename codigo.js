const colores = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

circulo.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
})

// Cuando soltamos algo encima
cuadrado.addEventListener('drop', e => {
    e.target.appendChild(document.getElementById(e.dataTransfer.getData('id')));
    e.target.style.border = 'none';
    document.querySelector('#cuadrado p.alert').style.display = 'none';
})

cuadrado.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.style.border = 'dotted 3px darkgray';
    document.querySelector('#cuadrado p.alert').style.display = 'block';
})

cuadrado.addEventListener('dragleave', e => {
    e.preventDefault();
    e.target.style.border = 'none';
    document.querySelector('#cuadrado p.alert').style.display = 'none';
    
})        


document.querySelector('body').addEventListener('dragover', e => {
    e.preventDefault();
})
document.querySelector('body').addEventListener('drop',e=>{
    let ele = document.getElementById(e.dataTransfer.getData('id'));
    e.target.appendChild(ele)
})
function agregar(){
    let div = document.querySelector('.circulos');
    let circulo =  document.createElement('div');
    circulo.classList.add('circulo');
    circulo.setAttribute('draggable','true');
    circulo.id = Math.round((Math.random()*100));
    circulo.style.background = colores[Math.round((Math.random()*50))];

    div.appendChild(circulo);

    circulo.addEventListener('dragstart', e => {
        e.dataTransfer.setData('id', e.target.id);
    })
    
}
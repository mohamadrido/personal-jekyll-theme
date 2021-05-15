var canvasDiv = document.getElementById('container');
var options = {
  particleColor: '#fff',
  interactive: true,
  speed: 'high',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

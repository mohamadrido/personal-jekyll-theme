var canvasDiv = document.getElementById('canvas');
var options = {
  particleColor: '#fff',
  background: 'https://images.pexels.com/photos/2261017/pexels-photo-2261017.jpeg',
  interactive: true,
  speed: 'high',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

document.querySelectorAll('.skill, .software, #project_grid .project').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = ((x - centerX) / centerX) * 5;
    const offsetY = ((y - centerY) / centerY) * 5; // Tweak the value for a more or less pronounced effect
    element.style.setProperty('--rotateX', -offsetY + 'deg');
    element.style.setProperty('--rotateY', offsetX + 'deg');
  });

  element.addEventListener('mouseleave', () => {
    element.style.setProperty('--rotateX', '0deg');
    element.style.setProperty('--rotateY', '0deg');
  });
});
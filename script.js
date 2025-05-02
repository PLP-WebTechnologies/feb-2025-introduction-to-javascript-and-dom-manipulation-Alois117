// Change the heading and subtext
document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('main-heading').textContent = 'Thanks for Clicking!';
  document.getElementById('sub-text').textContent = 'JavaScript is amazing, right?';
  document.body.style.backgroundColor = '#e0ffe0';
});

// Toggle a dynamic box element
document.getElementById('toggle-box-btn').addEventListener('click', () => {
  const container = document.getElementById('box-container');
  const existingBox = document.querySelector('.dynamic-box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement('div');
    newBox.classList.add('dynamic-box');
    container.appendChild(newBox);
  }
});

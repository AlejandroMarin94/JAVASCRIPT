export function createSection(titleContent) {
  const box = document.createElement('div');

  const title = document.createElement('h3');
  title.textContent = titleContent;

  box.appendChild(title);
  box.className = 'box-section';

  return box;
}

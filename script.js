const list = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('.add');

addButton.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';
  
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listButton);
  listButton.textContent ='Remove';
  list.appendChild(listItem);

  listButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });
  
  input.focus();
});

const dinosaurButton = document.querySelector('.dinosaur');
const dinosaurImageDiv = document.querySelector('#dinosaurImage');

dinosaurButton.addEventListener('click', () => {
  if (dinosaurImageDiv.querySelector('img')) {
    dinosaurImageDiv.innerHTML = '';
  } else {

  const image = document.createElement('img');
  image.src = 'dinosaur.png';
  image.alt = 'mdn dinosaur';
  dinosaurImageDiv.appendChild(image);
  }
});

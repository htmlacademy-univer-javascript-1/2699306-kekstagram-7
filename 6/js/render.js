const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

function createPicture(photo) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImage = pictureElement.querySelector('.picture__img');

  pictureImage.src = photo.url;
  pictureImage.alt = photo.description;

  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return pictureElement;
}

function renderPictures(photos) {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesFragment.append(createPicture(photo));
  });

  picturesList.append(picturesFragment);
}

export { renderPictures };

import { renderCard, clearCards } from './miniature-photos.js';
import { getRandomElement, sortByComments, debounce } from './util.js';
import { ACTIVE_BUTTON, Filters, RANDOM_PHOTO_AMOUNT } from './constants.js';

const filterContainer = document.querySelector('.img-filters');
const filterButtons = filterContainer.querySelectorAll('.img-filters__button');

let filteredPhotos = [];
let currentFilter;

const updatePhotos = () => {
  clearCards();

  switch (currentFilter.id) {
    case Filters.RANDOM:
      renderCard(getRandomElement(filteredPhotos, RANDOM_PHOTO_AMOUNT));
      break;
    case Filters.DISCUSSED:
      renderCard(sortByComments(filteredPhotos));
      break;
    default:
      renderCard(filteredPhotos);
  }
};

const debouncedUpdatePhotos = debounce(updatePhotos);

const onFilterChange = (evt) => {
  currentFilter = evt.target;

  if (!currentFilter.classList.contains('img-filters__button')) {
    return;
  }

  filterButtons.forEach((button) =>
    button.classList.remove(ACTIVE_BUTTON)
  );

  currentFilter.classList.add(ACTIVE_BUTTON);

  debouncedUpdatePhotos(currentFilter);
};

const showFilters = (photos) => {
  filteredPhotos = [...photos];
  filterContainer.classList.remove('img-filters--inactive');
};

filterContainer.addEventListener('click', onFilterChange);

export { showFilters };

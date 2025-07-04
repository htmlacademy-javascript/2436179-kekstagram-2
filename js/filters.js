import { renderCard, clearCards } from './miniature-photos.js';
import { getRandomElement, sortByComments, debounce } from './util.js';
import { ACTIVE_BUTTON, Filters, RANDOM_PHOTO_AMOUNT } from './constants.js';

const filterContainer = document.querySelector('.img-filters');

let filteredPhotos = [];
let currentFilter = Filters.DEFAULT;

const filtersSettings = {
  [Filters.DEFAULT]: () => filteredPhotos,
  [Filters.RANDOM]: () => getRandomElement(filteredPhotos, RANDOM_PHOTO_AMOUNT),
  [Filters.DISCUSSED]: () => sortByComments(filteredPhotos)
};

const updatePhotos = () => {
  clearCards();

  const getPhotos = filtersSettings[currentFilter.id] || filtersSettings[Filters.DEFAULT];
  renderCard(getPhotos());
};

const debouncedUpdatePhotos = debounce(updatePhotos);

const onFilterChange = (evt) => {
  const filterActiveButton = filterContainer.querySelector(`.${ACTIVE_BUTTON}`);

  currentFilter = evt.target;

  if (!currentFilter.classList.contains('img-filters__button')) {
    return;
  }

  if (filterActiveButton) {
    filterActiveButton.classList.remove(ACTIVE_BUTTON);
  }

  currentFilter.classList.add(ACTIVE_BUTTON);

  debouncedUpdatePhotos(currentFilter);
};

const showFilters = (photos) => {
  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', onFilterChange);
  filteredPhotos = [...photos];
};

export { showFilters };

import {createPhotoDescriptions} from './data.js';
import { renderCard } from './miniature-photos.js';
import './form.js';

const photos = createPhotoDescriptions();
renderCard(photos);

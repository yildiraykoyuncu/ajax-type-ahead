'use strict';
console.log('--- loading listener: _');

const searchInput = document.querySelector('.search')


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
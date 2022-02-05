import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avatarURL, favoriteItemsAmount) {
    const hasFavoriteItems = favoriteItemsAmount > 0;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarURL}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoriteItemsAmount || 'ничего нет'}
          </p>
      </div>
    </div>
    `);
}

import { renderBlock } from './lib.js'

export function renderUserBlock(favoriteItemsAmount: number, userName: string, userAvatar: string) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = !!favoriteItemsAmount;

  console.log(favoriteItemsAmount);
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

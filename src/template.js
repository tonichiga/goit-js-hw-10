export const template = (name, id, description, image, price, ingredients) =>
  `<li class="menu__item">
    <article class="card">
      <img
        src="${image}"
        alt="Картофель, запеченный в мундире"
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__name">${name}</h2>
        <p class="card__price">
          <i class="material-icons"> monetization_on </i>
          ${price}
        </p>

        <p class="card__descr">
         ${description}
        </p>

        <ul class="tag-list">
          ${ingredients.map(
            (ingredient) => `<li class="tag-list__item">${ingredient}</li>`
          )}
        </ul>
      </div>

      <button class="card__button button">
        <i class="material-icons button__icon"> shopping_cart </i>В корзину
      </button>
    </article>
  </li>`;

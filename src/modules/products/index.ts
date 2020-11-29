import faker from 'faker';

const createProduct = (): object => {
  const imageBaseUrl = 'https://www.electrolux.se/siteassets/regional-assets/emea/sweden/old-se-do-not-delete/99.-product-section/elux-fallback.png';
  const modalId = `EWF${faker.random.number({ min: 100, max: 999 })}X`;
  const pnc = `90000${faker.random.number({ min: 1000, max: 9000 })}`;

  return {
    PNC: pnc,
    ModelD: modalId,
    MlCode: '03',
    SerialNumber: null,
    ProductPageId: 0,
    LanguageCode: 'en-GB',
    ProductImage: imageBaseUrl,
    ProductGroupCode: '0001200025',
    ProductClass: 'WASHER',
    Title: '',
    PncDisplayCsv: pnc,
    IsDisabled: false,
    DisabledReason: null,
    PreventContinuation: false,
    SupportCategoryPageId: 586021,
    ImageUrl: imageBaseUrl,
    SmallThumbnail: {
      Source:
        `${imageBaseUrl}?width=80&quality=80&mode=crop`,
      SourceSet: [
        `${imageBaseUrl}?width=80&quality=80&mode=crop 80w`,
        `${imageBaseUrl}?width=160&quality=80&mode=crop 160w`,
        `${imageBaseUrl}?width=320&quality=80&mode=crop 320w`,
      ],
      MobileSourceSet: [],
    },
    LargeThumbnail: {
      Source:
        `${imageBaseUrl}?width=250&quality=80&mode=crop"`,
      SourceSet: [
        `${imageBaseUrl}?width=250&quality=80&mode=crop 250w`,
        `${imageBaseUrl}?width=322&quality=80&mode=crop 322w`,
        `${imageBaseUrl}?width=644&quality=80&mode=crop 644w`,
      ],
      MobileSourceSet: [],
    }
  };
};

const createMultipleProducts = (productsLength: number): object[] => {
  let products = [];

  for (let i: number = 0; i < productsLength; i++) {
    products.push(createProduct());
  }

  return products;
};

export {
  createProduct,
  createMultipleProducts
}

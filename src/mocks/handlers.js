import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://restcountries.com/v3.1/alpha/:countryCode',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          flags: {
            png: 'https://flagcdn.com/w320/pt.png',
            svg: 'https://flagcdn.com/pt.svg',
            alt: 'The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.',
          },
          name: {
            common: 'Portugal',
            official: 'Portuguese Republic',
            nativeName: {
              por: {
                official: 'República português',
                common: 'Portugal',
              },
            },
          },
          tld: ['.pt'],
          currencies: {
            EUR: {
              name: 'Euro',
              symbol: '€',
            },
          },
          capital: ['Lisbon'],
          region: 'Europe',
          subregion: 'Southern Europe',
          languages: {
            por: 'Portuguese',
          },
          borders: ['ESP'],
          population: 10305564,
        })
      );
    }
  ),
];

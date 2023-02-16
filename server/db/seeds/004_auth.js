/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('auth').del();
  await knex('auth').insert([
    {
      auth_token:
        'Loremipsumdolorsitametminimlaboreadipisicingminimsintcillumsintconsecteturcupidatat.hk',
      user_id: 1,
      last_login: 1676475649045,
      expire_time: 1676475650845,
    },
    {
      auth_token:
        'Loremipsumdolorsitamet,quimboreadipisicingminimsintcillumsintconsecteturcupidatat.hk',
      user_id: 2,
      last_login: 1676475649045,
      expire_time: 1676475650845,
    },
    {
      auth_token:
        'Loremidolorsitamet,quiminimlaboreadipisicingminimsintcillumsintconsecteturcupidatat.hk',
      user_id: 3,
      last_login: 1676475649045,
      expire_time: 1676475650845,
    },
    {
      auth_token:
        'Loremirsitamet,quiminimlaboreadipisicingminimsintcillumsintconsecteturcupidatat.hk',
      user_id: 4,
      last_login: 1676475649045,
      expire_time: 1676475650845,
    },
    {
      auth_token:
        'Loremipsumdolorsitamet,quiminimlaboreadiinimsintcillumsintconsecteturcupidatat.hk',
      user_id: 5,
      last_login: 1676475649045,
      expire_time: 1676475650845,
    },
  ]);
};

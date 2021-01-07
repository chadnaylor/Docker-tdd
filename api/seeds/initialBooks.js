
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          "id": 0,
          "title": "Kindaloo",
          "author": "Latoya Armstrong",
          "isbn": 2985,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 1,
          "title": "Cincyr",
          "author": "Hawkins Blake",
          "isbn": 1665,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 2,
          "title": "Aquazure",
          "author": "Bonita Carr",
          "isbn": 1903,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 3,
          "title": "Flum",
          "author": "Garza Everett",
          "isbn": 2115,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 4,
          "title": "Terascape",
          "author": "Delores Ortiz",
          "isbn": 2823,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 5,
          "title": "Amtap",
          "author": "Joseph Burks",
          "isbn": 3927,
          "is_checked_out": false,
          "checked_out_by": "6",
          "due_date": null
        },
        {
          "id": 6,
          "title": "Centuria",
          "author": "Shepherd Clay",
          "isbn": 1897,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 7,
          "title": "Kiosk",
          "author": "Geraldine Moon",
          "isbn": 1328,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 8,
          "title": "Peticular",
          "author": "Frazier Merritt",
          "isbn": 2376,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 9,
          "title": "Accruex",
          "author": "Galloway Morton",
          "isbn": 2678,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        },
        {
          "id": 10,
          "title": "Pheast",
          "author": "Mccullough Campos",
          "isbn": 3991,
          "is_checked_out": false,
          "checked_out_by": null,
          "due_date": null
        }
      ]);
    });
};




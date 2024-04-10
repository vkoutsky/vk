'use strict';

const fs = require('fs').promises;
const path = require('path');

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    // try {
    //   const filePath = path.join(__dirname, 'new.json');
    //   const jsonData = await fs.readFile(filePath, 'utf-8');
    //   const data = JSON.parse(jsonData);

    //   const existingCategories = new Map();
    //   const existingActors = new Map();

    //   for (const entry of data) {
    //     console.log('Processing entry:', entry); // Debug logging

    //     const categoriesIds = [];
    //     const actorsIds = [];

    //     // Process genres (categories)
    //     for (const genre of entry.genres) {
    //       let categoryId;
    //       if (!existingCategories.has(genre)) {
    //         // Category does not exist, create it
    //         try {
    //           const category = await strapi.entityService.create("api::category.category", {
    //             data: {
    //               name: genre,
    //               publishedAt: new Date()
    //             },
    //           });
    //           categoryId = category.id;
    //           existingCategories.set(genre, categoryId);
    //         } catch (error) {
    //           console.error('Error creating category:', error);
    //         }
    //       } else {
    //         // Category already exists, use its ID
    //         categoryId = existingCategories.get(genre);
    //       }
    //       categoriesIds.push(categoryId);
    //     }

    //     // Process actors
    //     for (const actorName of entry.cast) {
    //       let actorId;
    //       if (!existingActors.has(actorName)) {
    //         // Actor does not exist, create it
    //         try {
    //           const actor = await strapi.entityService.create("api::actor.actor", {
    //             data: {
    //               name: actorName,
    //               publishedAt: new Date()
    //             },
    //           });
    //           actorId = actor.id;
    //           existingActors.set(actorName, actorId);
    //         } catch (error) {
    //           console.error('Error creating actor:', error);
    //         }
    //       } else {
    //         // Actor already exists, use its ID
    //         actorId = existingActors.get(actorName);
    //       }
    //       actorsIds.push(actorId);
    //     }

    //     // Create movie entity
    //     try {
    //       const movie = await strapi.entityService.create("api::movie.movie", {
    //         data: {
    //           title: entry.title,
    //           year: entry.year,
    //           categories: categoriesIds.map(id => ({ id })),
    //           actors: actorsIds.map(id => ({ id })),
    //           description: entry.extract,
    //           thumbnail: entry.thumbnail,
    //           publishedAt: new Date()
    //         },
    //       });
    //     } catch (error) {
    //       console.error('Error creating movie:', error);
    //     }
    //   }
    // } catch (error) {
    //   console.error('Error reading JSON file:', error);
    // }
  },
};

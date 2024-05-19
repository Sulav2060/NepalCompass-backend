'use strict';

/**
 * arriving router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::arriving.arriving');

'use strict';

/**
 * trekking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trekking.trekking');

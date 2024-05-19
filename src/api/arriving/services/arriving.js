'use strict';

/**
 * arriving service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arriving.arriving');

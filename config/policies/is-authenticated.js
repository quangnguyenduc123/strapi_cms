'use strict';

/**
 * `is-authenticated` policy.
 */

module.exports = async (ctx, next) => {
  ctx.query.user_id = 2
  // Add your own logic here.
  console.log('In is-authenticated policy.');

  await next();
};

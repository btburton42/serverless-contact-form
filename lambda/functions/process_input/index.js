console.log('exec lambda')
exports.handle = function(e, ctx, cb) {
  console.log('process event', e)
  return cb(null, {
    data: e.data
  });
}

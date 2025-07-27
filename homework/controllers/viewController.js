module.exports = {
  index(req, res) {
    res.render('logs/Index', { logs: res.locals.logs });
  },

  new(req, res) {
    res.render('logs/New');
  },

  show(req, res) {
    res.render('logs/Show', { log: res.locals.log });
  },

  edit(req, res) {
    res.render('logs/Edit', { log: res.locals.log });
  },

  redirectIndex(req, res) {
    res.redirect('/logs');
  },

  redirectShow(req, res) {
    res.redirect(`/logs/${res.locals.id}`);
  }
};

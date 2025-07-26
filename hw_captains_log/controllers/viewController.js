const RESOURCE_PATH = '/logs'

const viewController = {
  index(req, res) {
    res.render('logs/Index', { logs: res.locals.data.logs });
  },
  newView(req, res) {
    res.render('logs/New');
  },
  showView(req, res) {
    res.render('logs/Show', { log: res.locals.data.log });
  },
  editView(req, res) {
    res.render('logs/Edit', { log: res.locals.data.log });
  },
  redirectShow(req, res) {
    res.redirect(`/logs/${res.locals.data.log._id}`);
  },
  redirectHome(req, res) {
    res.redirect('/logs');
  }
};

module.exports = viewController;
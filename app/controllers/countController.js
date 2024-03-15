const countController = {
  show(req, res) {
    res.render('index', {
      num: 0,
    });
  },

  showAddForm(req, res) {
    res.render('add');
  },

  add(req, res) {
    res.redirect('/');
  },
};

module.exports = countController;

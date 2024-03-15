const countController = {
	show(req, res) {
		// Si je n'ai pas de num dans ma session,
		if (req.session.num === undefined) {
			// je l'initialise à 0 :
			req.session.num = 0;
		}

		res.render('index', {
			num: req.session.num,
		});
	},

	showAddForm(req, res) {
		res.render('add');
	},

	add(req, res) {
		// info : toutes les données d'un formulaire sont des string
		// 1. récupérer le nombre à ajouter :
		const num = Number(req.body.num);
		// 2. Je m'assure d'avoir un num dans ma session
		if (req.session.num === undefined) {
			// je l'initialise à 0 :
			req.session.num = 0;
		}

		// 3. J'ajoute le nombre à ma session
		req.session.num += num;
		res.redirect('/');
	},
};

module.exports = countController;

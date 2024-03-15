const { Router } = require('express');
const countController = require('./controllers/countController');

const router = Router();

router.get('/', countController.show);
router.get('/add', countController.showAddForm);
router.post('/add', countController.add);

module.exports = router;

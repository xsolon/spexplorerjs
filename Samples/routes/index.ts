/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express', version: 'a1' });
});

router.get('/spsearch', (req: express.Request, res: express.Response) => {
    res.render('spsearch', { title: 'Express', version: 'a1' });
});
router.get('/jstree', (req: express.Request, res: express.Response) => {
    res.render('jstree', { title: 'Express', version: 'a1' });
});
export default router;
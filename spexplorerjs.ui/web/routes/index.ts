/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();
var jsPath = `${__dirname}${'/../../public/js'}`;
console.log(jsPath);
router.use('/javascripts', express.static(__dirname + '/../public/javascripts'));
router.use('/js', express.static(jsPath));

var app3Path = `${__dirname}${'/../../public/app3'}`;
router.use('/app3', express.static(app3Path));

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express', version: '0.0.8' });
});
router.get('/spsearch', (req: express.Request, res: express.Response) => {
    res.render('spsearch', { title: 'Express', version: 'a1' });
});
router.get('/jstree', (req: express.Request, res: express.Response) => {
    res.render('jstree', { title: 'Express', version: 'a1' });
});
router.get('/filesystem', (req: express.Request, res: express.Response) => {
    res.render('filesystem', { title: 'Express', version: 'a1' });
});
router.get('/page1', (req: express.Request, res: express.Response) => {
    res.render('page1', { title: 'Express', version: 'a1' });
});
router.get('/page2', (req: express.Request, res: express.Response) => {
    res.render('page2', { title: 'Express', version: 'a1' });
});
router.get('/monaco', (req: express.Request, res: express.Response) => {
    res.render('monaco', { title: 'Express', version: 'a1' });
});
export default router;
import express from'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'
import categories from './routes/api/categories'
import bodyParser from 'body-parser'

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname+'/public'));

app.use('/api/categories', categories);

app.listen(3000, ()=> {
    console.log(`Server on port ${3000}`)
});
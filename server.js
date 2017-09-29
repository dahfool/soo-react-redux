import express from'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import bodyParser from 'body-parser'
import webpackConfig from './webpack.config'
import categories from './routes/api/categories'
import countries from './routes/api/countries'
import path from 'path'

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname+'/public'));

app.use('/api/categories', categories);
app.use('/api/countries', countries);

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, ()=> {
    console.log(`Server on port ${3000}`)
});
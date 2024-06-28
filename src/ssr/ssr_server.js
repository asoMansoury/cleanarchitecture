const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const TodoApp = require('../../build/static/js/main.07e4a638');

const app = express();

app.get('/',(req,res)=>{
    const App = () => React.createElement('h1',{},[
        React.createElement('div',{},"Another Point")
    ]);

   const html =  ReactDOMServer.renderToString(App())
    res.send(html);
})
app.listen(3004,()=>{
    console.log('server started...');
})
import app from './app';

app.listen(5080, ()=>console.log("App is running on port 5001"));

console.log(app.get('env'));



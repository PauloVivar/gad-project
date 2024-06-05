
const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');

passport.use(LocalStrategy);

// app.use(passport.initialize());
// // Rutas
// routerApi(app);

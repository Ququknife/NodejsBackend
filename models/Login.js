var db = require('../dbconnection');

var LoggedIn = {
    sessionid: null,
    loggedin: false,
    username: null,
    message: null
}



var Login = {
    userLogin: function (req, user, callback) {
        //return db.query("select * from users where username=?", [User.username], callback);
        return db.query("select * from users where username=?", [user.username], function (err, res, fields) {
            if (err) {
                throw (err);
            } else {
                if (res.length > 0) {
                    if (res[0].password == user.password) {
                        //req.session.loggedin = true;
                        //req.session.username = res[0].username;
                        //LoggedIn.loggedin = Request.session.loggedin;
                        //LoggedIn.username = Request.session.username;
                        LoggedIn.loggedin = true;
                        LoggedIn.username = res[0].username;
                        LoggedIn.message = 'Login succesful';
                        console.log(LoggedIn);
                        //res.json(LoggedIn);
                    } else {
                        LoggedIn.loggedin = false;
                        LoggedIn.username = '';
                        LoggedIn.message = 'Password incorrect';
                        //res.json(LoggedIn);
                        console.log(LoggedIn);
                    }
                } else {
                    LoggedIn.loggedin = false;
                    LoggedIn.username = '';
                    LoggedIn.message = 'User does not exists';
                    //res.json(LoggedIn);
                    console.log(LoggedIn);
                }
            }
        });
    },
};
module.exports = Login;
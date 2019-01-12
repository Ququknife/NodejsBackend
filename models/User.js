var db = require('../dbconnection');

var User = {
    getAllUsers: function (callback) {
        return db.query("Select * from users", callback);
    },

    getUserById: function (id, callback) {
        return db.query("select * from users where id = ?", [id], callback);
    },

    addUser: function (user, callback) {
        return db.query("insert into users values(?,?,?,?,?)", [user.id, user.username, user.first_name, user.last_name, user.password], callback);
    },

    deleteUser: function (id, callback) {
        return db.query("delete from users where id = ?", [id], callback);
    },

    updateUser: function (id, user, callback) {
        return db.query("update user set username=?, first_name=?, last_name=?, password=? where id=?",[user.username, user.first_name, user.last_name, user.password, id], callback);
    }
};

module.exports = User;
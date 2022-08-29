const selectOne = require('./selectOne');
const selectAll = require('./selectAll');
const insert = require('./insert');
const update = require('./update');
const remove = require('./remove');
const selectByEmail = require('./selectByEmail');

module.exports = {
    selectOne,
    selectAll,
    insert,
    update,
    remove,

    selectByEmail,
}
const { Model } = require("./model");

function selectAll() {
    return Model.find({});
}

function selectOne(id) {
    return Model.findById(id);
}

function insert(data) {
    const model = Model(data);
    return model.save();
}

function update(id, data) {
    return Model.findByIdAndUpdate({ id, data });
}

function remove(id) {
    return Model.findByIdAndDelete(id);
}


module.exports = {
    selectAll,
    selectOne,
    insert,
    update,
    remove
};
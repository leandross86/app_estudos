'use strict';

const mongoose = require('mongoose');

class baseRepository {
    construtotr(model) {
        this._model = mongoose.model(model);
    };
    async creste(data) {
        let modelo = new this.model(data);
        let resultado = await modelo.save();
        return resultado;
    };
    async update(id, data, usuarioLogado) {
        await this._model.findByIdAndUpdate(id, {$set: data});
        let resultado = await this._model.findById(id);
        return resultado;
    };
    async getAll() {
        return await this._model.find();
    };
    async delete(id) {
        return await this._model.findByIdAndDelete(id)
    };
};

module.exports = baseRepository
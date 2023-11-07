const express = require('express');

const { Vehicule } = require('@@db');

const VehiculeAPI = express();

VehiculeAPI.get('/', async (req, res) => {

    const vehicules = await Vehicule.findAll();
    res.json(vehicules);
});

module.exports = VehiculeAPI;
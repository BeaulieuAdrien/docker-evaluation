const express = require('express');

const { Vehicule } = require('@@db');
const { isString } = require('util');

const VehiculeAPI = express();

VehiculeAPI.use(express.json());

VehiculeAPI.get('/', async (req, res) => {

    const vehicules = await Vehicule.findAll();
    res.json(vehicules);
});

VehiculeAPI.post('/', async (req, res) => {

    try {
        const { name, wheels, brand } = req.body;


        if (name && wheels && brand) {
            console.log('here');

            const newVehicule = await Vehicule.create({
                name,
                wheels,
                brand,
            })

            console.log('here');

            res.status(201).json(newVehicule);
        } else {
            res.status(400).json({
                error: "Données invaldies ou manquantes"
            });
        }     

    } catch (error){
        res.status(400).json({
            error: 'Impossible de créer le véhicule.'
        });
    }
});

module.exports = VehiculeAPI;
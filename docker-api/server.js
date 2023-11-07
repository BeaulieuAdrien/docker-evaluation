require('dotenv').config({
    path: '../.env'
});

require('module-alias/register');

const express = require('express');

const PORT = process.env.HTTP_API_PORT;
const ADDR = process.env.HTTP_API_ADD;

const server = require('@@app').listen(PORT, ADDR, () => {
    const { address, port } = server.address(); 
    console.log(PORT, ADDR);
});
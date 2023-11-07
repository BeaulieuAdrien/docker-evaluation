require('dotenv').config();

require('module-alias/register');

const express = require('express');

const PORT = process.env.HTTP_API_PORT;
const ADDR = "0.0.0.0";

const server = require('@@app').listen(PORT, ADDR, () => {
    const { address, port } = server.address(); 
    console.log(PORT, ADDR);
});
require('dotenv').config();

require('module-alias/register');

const express = require('express');

const PORT = process.env.HTTP_API_PORT || 3000;
const ADDR = process.env.HTTP_API_ADD || '127.0.0.1';

const server = require('@@app').listen(PORT, ADDR, () => {
    const { address, port } = server.address(); 
});
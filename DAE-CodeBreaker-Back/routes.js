'use strict' // convencio de EMC6
const express = require('express');
const codebreaker= require('./codebreaker');
//controlador
const api=express.Router();
const instanceCodeBreaker = new codebreaker("1234");

api.get('/codebreaker/:num',function (req, res) {
    let num = req.params.num;
    let result = instanceCodeBreaker.compare(num);
    res.status(200).send({ result });
});

api.get('/codebreaker/secret/:num',function (req, res) {
    let num = req.params.num;
    let result = instanceCodeBreaker.setSecret(num);
    res.status(200).send({ result });
});


module.exports=api;
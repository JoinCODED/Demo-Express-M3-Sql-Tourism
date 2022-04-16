let Monument = require('../../db/models/Monument');

exports.fetchMonument = async (monumentId) => {
  try {
    const monument = await Monument.findByPk(monumentId);
    return monument;
  } catch (error) {
    next(error);
  }
};

exports.monumentsCreate = async (req, res) => {
  try {
    const newMonument = await Monument.create(req.body);
    res.status(201).json(newMonument);
  } catch (error) {
    next(error);
  }
};

exports.monumentsDelete = async (req, res, next) => {
  try {
    await req.monument.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.monumentsUpdate = async (req, res, next) => {
  try {
    await req.monument.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.monumentsGet = async (req, res) => {
  try {
    const monuments = await Monument.findAll();
    res.json(monuments);
  } catch (error) {
    next(error);
  }
};

let Monument = require('../../db/models/Monument');

exports.monumentsCreate = async (req, res) => {
  try {
    const newMonument = await Monument.create(req.body);
    res.status(201).json(newMonument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsDelete = async (req, res) => {
  const { monumentId } = req.params;
  try {
    const foundMonument = await Monument.findByPk(+monumentId);
    if (foundMonument) {
      await foundMonument.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'monument not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsUpdate = async (req, res) => {
  const { monumentId } = req.params;
  try {
    const foundMonument = Monument.findByPk(+monumentId);
    if (foundMonument) {
      await foundMonument.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'monument not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsGet = async (req, res) => {
  try {
    const monuments = await Monument.findAll();
    res.json(monuments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

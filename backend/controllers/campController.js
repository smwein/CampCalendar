const Camp = require('../models/campModel');

exports.getAllCamps = async (req, res) => {
  try {
    const camps = await Camp.find();
    res.status(200).json({
      status: 'success',
      data: camps,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createCamp = async (req, res) => {
  try {
    const camp = await Camp.create(req.body);
    res.status(201).json({
      status: 'success',
      data: camp,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

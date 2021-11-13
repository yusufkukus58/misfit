const Training = require("../models/Training");
exports.createTraining = async (req, res) => {
  try {
    const training = await Training.create(req.body);
    res.status(201).json({
      status: "success",
      training,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllTrainings = async (req, res) => {
    try {
      const trainings = await Training.find().sort('-createdAt');
      res.status(200).render('trainings', {
        trainings,
        
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
      }
  };
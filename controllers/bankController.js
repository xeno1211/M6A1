const Bank = require('../models/bankModel')
exports.getData = async (req, res) => {
    const banks = await Bank.find()
    res.status(200).json({
        status: "success",
        results: banks.length,
        data: {
            banks
        }
    })
}
exports.getDataByID = async (req, res) => {
    const {id} = req.params
    const banks = await Bank.find({_id: id})
    res.status(200).json({
        status: "success",
        results: banks.length,
        data: {
            banks
        }
    })
}
exports.createbank = async  (req, res) => {
    try {
      // const newbank = new bank({})
      // newbank.save()
  
      const newbank = await Bank.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          bank: newbank
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
exports.updatebank = async (req, res) => {
    try {
      const bank = await Bank.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          bank
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.deletebank = async (req, res) => {
    try {
      await Bank.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

//module.exports = controller
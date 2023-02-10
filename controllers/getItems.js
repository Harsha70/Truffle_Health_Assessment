const handleGetItems = (req, res, bills) => {
    res.json(bills)
  }
  
  module.exports = {
    handleGetItems
  }
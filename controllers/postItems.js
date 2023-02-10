const handlePostItems = (req, res, bills) => {
    const { p_Name, p_Address, hospitalName, serviceDate, billAmount } = req.body;
    const bill = { p_Name, p_Address, hospitalName, serviceDate, billAmount };
    bills.push(bill);
    res.json(bill);
}

module.exports = {
    handlePostItems: handlePostItems
  };
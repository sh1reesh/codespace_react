const Data = require('../models/dataModel');

exports.getAggregatedData = async (req, res) => {
    try {
        const result = await Data.aggregate([
            { $group: { _id: "$category", total: { $sum: "$value" } } },
            { $sort: { total: -1 } }
        ]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

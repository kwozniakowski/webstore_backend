const categoryRepository = require('./CategoryRepo')

exports.getAllCategories = async (req,res) => {
    try {
        let categories = await categoryRepository.categories();
        res.status(200).json({
            status: true,
            data: categories,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
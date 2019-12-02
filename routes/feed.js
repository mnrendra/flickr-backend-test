// test feed request module
const feed = (req, res, next) => {
  res.status(200).json({
    from: 'feed route'
  })
}

module.exports = feed

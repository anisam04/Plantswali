
function getMainPage(req, res) {
    res.render('index')
}

function getReadMePage(req, res) {
    res.render('readme')
}


module.exports = {
    getReadMePage,
    getMainPage
}
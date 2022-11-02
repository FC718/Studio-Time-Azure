const Studio = require("../models/studio");

module.exports = {
    about,
    index,
    new: newStudio,
    create,
    show,
    contact,
    booking,
    delete: deleteStudio,
    edit,
    update 
}

function index(req, res) {
    // Studo.find is searching / querying through a studio model 
    // to get the information.
    Studio.find({ }, function(err, studios){
    res.render('studios/index', {title: '', studios})
    })
}

function about(req, res) {
    console.log('about');
    res.render('studios/about', {title: 'ABOUT PAGE'} )
}

// Takes me to a page
function newStudio (req, res) {
    res.render('studios/new', {title: 'New Studios'} )
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    const studio = new Studio(req.body);
    studio.save(function (err) {
        if (err) return res.redirect('studios/new');
        res.redirect('/studios')
    });
}


function show(req, res) {
    Studio.findById(req.params.id, function(err, studio) {
        res.render('studios/show', {
            title: 'Studio',
            studio
        });
    });
}

function contact(req, res) {
    res.render('studios/contact', { title: "Contact"}) 
}

function booking(req,res) {
    res.render('studios/booking', {title: "Booking"})
}

function deleteStudio(req, res) {

}

function edit(req, res) {

}

function update(req, res) {

}
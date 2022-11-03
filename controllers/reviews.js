const studio = require('../models/studio');
const Studio = require('../models/studio');

module.exports = {
    create,
    update,
    edit: editReview,
    delete: deleteReviews
};

function create(req, res) {
    Studio.findById(req.params.id, function (err, studio) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        // We push an object with the data for the
        // review subdoc into studios arrays
        studio.reviews.push(req.body);
        studio.save(function (err) {
            // Step 5: Respond with a redirect because we've mutated data
            res.redirect(`/studios/${studio._id}`);
        });
    });
}

function update(req, res) {
    Studio.findOne({ 'reviews._id': req.params.id }, function (err, studio) {
        // find the review subdoc using the id method on studio arrays
        const reviewSubdoc = studio.reviews.id(req.params.id);
        // Ensure that the review was created by the logged in user
        if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/studios/${studio._id}`);
        // update the text of the review
        reviewSubdoc.content = req.body.content;
        // save the updated studio
        studio.save(function (err) {
            // redirect back to the books show view
            res.redirect(`/studios/${studio._id}`);
        });
    });
}


function editReview(req, res) {
    Studio.findOne({ 'reviews._id': req.params.id }, function (err, studio) {
        // Find the review subdoc using the id method on studio arrays
        // https://mongoosejs.com/docs/subdocs.html
        const review = studio.reviews.id(req.params.id);
        // Render the reviews/edit.ejs template, passing to it the comment
        res.render('reviews/edit', { title: 'Reviews', review });
    });
}

function deleteReviews(req, res) {
    Studio.findOne({
        'reviews._id': req.params.id,
        'reviews.user': req.user._id
    }).then(function (studio) {
        if (!studio) return res.redirect('/studios');
        studio.reviews.remove(req.params.id);
        studio.save().then(function () {
            res.redirect(`/studios/${studio._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
}

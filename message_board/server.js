const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board_db');
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})
mongoose.model('Message', MessageSchema);
const Message = mongoose.model('Message');

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    comment: {type: String, required: true},
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
})
mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');


app.get('/', function(req, res){
    Message.find({}).populate('comments')
    .exec(function(err, messages){
        if(err){
            console.log(err);
        }
        res.render('index', {messages: messages})
    })
})


app.post('/messages', function(req, res){
    const new_message = new Message(req.body);
    new_message.save(function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    })
})

app.post('/messages/:id/comment', function(req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        const new_comment = new Comment(req.body);
        new_comment._message = message._id;
        new_comment.save(function(err){
            message.comments.push(new_comment._id);
            message.save(function(err){
                if(err){
                    console.log(err);
                }
                res.redirect('/');
            })
        })
    })
})

app.listen(port, function(){
    console.log("listening on port number")
})

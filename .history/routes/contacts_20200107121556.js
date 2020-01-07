const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
routere.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   GET api/contacts
// @desc    Add new contacts
// @access  Private
routere.post('/', (req, res) => {
    res.send('Add contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
routere.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
routere.delete('/', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;
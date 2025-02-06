// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Instagram OAuth
router.get('/auth/instagram', passport.authenticate('instagram'));
router.get('/auth/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/dashboard')
);

// Telegram Token Auth
router.post('/auth/telegram', (req, res) => {
  const { phone, botToken } = req.body;
  // Store encrypted session using AES-256
  encryptAndStoreSession(phone, botToken);
  res.status(200).json({ success: true });
});

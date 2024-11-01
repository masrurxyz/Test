// script.js

// Simulate unique username and data persistence
let userData = JSON.parse(localStorage.getItem('userData')) || {
  username: `user_${Math.floor(Math.random() * 100000)}`,
  balance: 0,
  dailyStreak: 0,
  lastLogin: null
};

// Display balance and streak
document.getElementById('balance').textContent = userData.balance;

// Daily Login Reward Popup Logic
const rewardPopup = document.getElementById('rewardPopup');
const dailyReward = document.getElementById('dailyReward');
const claimButton = document.getElementById('claimButton');

// Check if today is a new login day
const today = new Date().toDateString();
if (userData.lastLogin !== today) {
  userData.dailyStreak = userData.lastLogin ? userData.dailyStreak + 1 : 1;
  const rewardAmount = userData.dailyStreak * 100;
  dailyReward.textContent = rewardAmount;

  rewardPopup.classList.add('active');
  rewardPopup.style.display = 'block';

  claimButton.addEventListener('click', () => {
    userData.balance += rewardAmount;
    userData.lastLogin = today;

    document.getElementById('balance').textContent = userData.balance;

    rewardPopup.classList.remove('active');
    setTimeout(() => {
      rewardPopup.style.display = 'none';
    }, 500);

    localStorage.setItem('userData', JSON.stringify(userData));
  });
} else {
  localStorage.setItem('userData', JSON.stringify(userData));
}

// Referral Pop-up Logic
function openReferralPopup() {
  const referralPopup = document.getElementById('referralPopup');
  document.getElementById('referralLink').value = `http://t.me/testapp12345_bot/Test/${userData.username}`;
  referralPopup.classList.add('active');
  referralPopup.style.display = 'block';
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove('active');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500);
}

function copyReferral() {
  const referralLink = document.getElementById('referralLink');
  referralLink.select();
  document.execCommand('copy');
}

// Redirect to URLs
function redirectTo(type) {
  if (type === 'community') {
    window.location.href = 'https://x.com';
  } else if (type === 'joinX') {
    window.location.href = 'https://x.com';
  }
}

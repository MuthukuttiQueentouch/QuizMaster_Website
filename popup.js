// JS for popup
const appstoreBtn = document.getElementById('appstore-btn');
const iosPopup = document.getElementById('ios-popup');
const goBackBtn = document.getElementById('go-back');
const tryAndroidBtn = document.getElementById('try-android');

appstoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iosPopup.style.display = 'flex';
});

goBackBtn.addEventListener('click', () => {
  iosPopup.style.display = 'none';
});

tryAndroidBtn.addEventListener('click', () => {
  iosPopup.style.display = 'none';
  window.location.href = "https://play.google.com/store/apps/details?id=com.yourappid";
});

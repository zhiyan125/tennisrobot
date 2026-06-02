emailjs.init('A2yMXidXJdGeLZHc4');

document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  const params = {
    name:     document.getElementById('name').value,
    email:    document.getElementById('email').value,
    phone:    document.getElementById('phone').value,
    location: document.getElementById('location').value,
    date:     document.getElementById('date').value,
    message:  document.getElementById('message').value,
  };

  emailjs.send('service_a0dh2ok', 'template_l555csp', params)
    .then(function() {
      document.getElementById('form-success').classList.remove('hidden');
      document.getElementById('form-error').classList.add('hidden');
      document.getElementById('booking-form').reset();
      btn.disabled = false;
      btn.textContent = 'Send Booking Request';
    }, function() {
      document.getElementById('form-error').classList.remove('hidden');
      document.getElementById('form-success').classList.add('hidden');
      btn.disabled = false;
      btn.textContent = 'Send Booking Request';
    });
});

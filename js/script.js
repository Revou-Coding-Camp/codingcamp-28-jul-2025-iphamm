document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    if (welcomeMessageElement) {
        const defaultName = "Ilham";
        welcomeMessageElement.textContent = `Hai ${defaultName}, Selamat Datang di Sinergi Solusi Digital!`;
    }

    function updateCurrentTime() {
        const currentTimeDisplay = document.getElementById('currentTimeDisplay');
        if (currentTimeDisplay) {
            const now = new Date();
            const options = {
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                timeZoneName: 'short'
            };
            currentTimeDisplay.textContent = now.toLocaleString('id-ID', options);
        }
    }

    updateCurrentTime();

    const messageForm = document.getElementById('messageForm');
    const formDataDisplay = document.getElementById('formDataDisplay');

    if (messageForm && formDataDisplay) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const birthDate = document.getElementById('birthDate').value;
            const messageText = document.getElementById('messageText').value.trim();

            const genderMale = document.getElementById('genderMale');
            const genderFemale = document.getElementById('genderFemale');
            let gender = '';

            if (genderMale.checked) {
                gender = genderMale.value;
            } else if (genderFemale.checked) {
                gender = genderFemale.value;
            }

            if (fullName === '') {
                alert('Nama lengkap tidak boleh kosong.');
                return;
            }
            if (birthDate === '') {
                alert('Tanggal lahir tidak boleh kosong.');
                return;
            }
            if (gender === '') {
                alert('Jenis kelamin harus dipilih.');
                return;
            }
            if (messageText === '') {
                alert('Pesan tidak boleh kosong.');
                return;
            }

            document.getElementById('displayName').textContent = fullName;
            document.getElementById('displayBirthDate').textContent = birthDate;
            document.getElementById('displayGender').textContent = gender;
            document.getElementById('displayMessage').textContent = messageText;

            updateCurrentTime();

            formDataDisplay.style.display = 'block';
        });
    }

    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');

        const currentPath = window.location.pathname.split('/').pop();
        const linkHref = link.getAttribute('href');
        const linkPath = linkHref.split('/').pop().split('#')[0];

        if (currentPath === linkPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
});
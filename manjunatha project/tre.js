
        function validateForm() 
        {
          
            document.getElementById('name-error').innerHTML = '';
            document.getElementById('email-error').innerHTML = '';
            document.getElementById('password-error').innerHTML = '';
            document.getElementById('confirm-password-error').innerHTML = '';

            let valid = true;

           
            const name = document.getElementById('name').value;
            if (name.trim() === '') {
                document.getElementById('name-error').innerHTML = 'Enter full name.';
                valid = false;
            }

            const email = document.getElementById('email').value;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email.trim() === '') {
                document.getElementById('email-error').innerHTML = 'valid email';
                valid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('email-error').innerHTML = ' enter a valid email address.';
                valid = false;
            }

            const password = document.getElementById('password').value;
            if (password.trim() === '') {
                document.getElementById('password-error').innerHTML = 'Password is required.';
                valid = false;
            }

         
            const confirmPassword = document.getElementById('confirm-password').value;
            if (confirmPassword.trim() === '') {
                document.getElementById('confirm-password-error').innerHTML = 'Please confirm your password.';
                valid = false;
            } else if (confirmPassword !== password) {
                document.getElementById('confirm-password-error').innerHTML = 'do not match.';
                valid = false;
            }

            return valid;
        }
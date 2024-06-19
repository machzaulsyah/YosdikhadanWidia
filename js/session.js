import { util } from './util.js';
import { user } from './user.js';
import { theme } from './theme.js';
import { storage } from './storage.js';
import { comment } from './comment.js';
import { request, HTTP_POST } from './request.js';

export const session = (() => {


    const login = async (button) => {

        const btn = util.disableButton(button, '<div class="spinner-border spinner-border-sm me-1" role="status"></div>Loading..');
        const formEmail = document.getElementById('loginEmail');
        const formPassword = document.getElementById('loginPassword');

        formEmail.disabled = true;
        formPassword.disabled = true;


        if (res) {
            bootstrap.Modal.getOrCreateInstance('#loginModal').hide();
            user.getUserDetail();
            user.getStatUser();
            comment.comment();
        }

        btn.restore();
        formEmail.disabled = false;
        formPassword.disabled = false;
    };

    const logout = () => {
        if (!confirm('Are you sure?')) {
            return;
        }

        session.unset('token');
        (new bootstrap.Modal('#loginModal')).show();
    };

    return {
        login,
        logout
    };
})();
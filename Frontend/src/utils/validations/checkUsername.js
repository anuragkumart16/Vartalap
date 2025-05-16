export default function checkUsername(username) {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;

    if (username.length < 3 || username.length > 16) {
        return 'Username must be between 3 and 16 characters long.';
    }

    if (!regex.test(username)) {
        return 'Username can only contain letters, numbers, and underscores.';
    }

    return true;
}
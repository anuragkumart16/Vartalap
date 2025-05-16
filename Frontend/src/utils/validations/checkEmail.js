export default function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.includes('@')) {
        return 'Email must contain "@" symbol.';
    }

    if (!regex.test(email)) {
        return 'Invalid email format. ';
    }

    return true;
}

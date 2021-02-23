/*There are libraries that make showing errors when passwords don't match/etc easier but we'll be doing it the hard way. */
export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required"
    } // Trim gets rid of white space

    // Email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { // Crazy code he found on internet
        errors.email = 'Email address is invalid';
    }


    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    if (!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match"
    }

    return errors;
}
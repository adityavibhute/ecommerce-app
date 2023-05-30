export const handleResponse = (res) => {
    return res.json().then((data) => res.ok ? data : null);
}

export const handleError = (err) => {
    console.log('inside error ', err);
}

export const sendContactForm = async (data) => fetch('/api/contactdata', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        keys: 'Referrer-Policy',
        values: 'strict-origin-when-cross-origin'
    }
}).then((respond) => {
    if(!respond.ok) throw new Error("Failed to send message");
    return respond.json();
})

export const sendOrderForm = async (data) => fetch('/api/orderdata', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        keys: 'Referrer-Policy',
        values: 'strict-origin-when-cross-origin'
    }
}).then((respond) => {
    if(!respond.ok) throw new Error("Failed to send message");
    return respond.json();
})

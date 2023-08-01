
export const sendContactForm = async (data) => fetch('/api/contactdata', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}).then((respond) => {
    if(!respond.ok) throw new Error("Failed to send message");
    return respond.json();
})
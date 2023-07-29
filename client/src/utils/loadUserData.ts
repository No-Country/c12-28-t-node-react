export default async function loadUserData() {
    await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/users/mail?email=elias`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("userData", JSON.stringify(data))
        })
        .catch(error => console.log(error));
}
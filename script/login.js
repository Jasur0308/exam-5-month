const $loginForm = document.querySelector("#loginForm");
const $inputs = $loginForm.querySelectorAll(".loginInputs");

const handleUserLogin = async (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);

    const user = {
        email: values[0],
        password: values[1]
    };

    try {
        const response = await fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok && data.data.token) {
            localStorage.setItem("token", data.data.token);
            console.log("Token stored:", localStorage.getItem("token")); // Verify token storage
            window.location.replace("/pages/profile.html");
        } else {
            console.error(data.message || "Login failed. No access token received.");
        }
    } catch (error) {
        console.error("Network error:", error);
    }
};

$loginForm.addEventListener("submit", handleUserLogin);
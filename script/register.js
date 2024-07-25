const $signUpForm = document.querySelector("#signUpForm");
const $inputs = $signUpForm.querySelectorAll(".signUpInputs");

const handleUserRegister = async (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);

    const user = {
        name: values[0],
        email: values[1],
        password: values[2]
    };

    console.log("User data:", user);

    try {
        const response = await fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        console.log("Server response:", data);

        if (response.ok && data.status === "success") {
            location.replace(location.origin + "/pages/login.html");
        } else {
            console.error(data.message || "Registration failed");
        }
    } catch (error) {
        console.error("Network error:", error);
    }
};

$signUpForm.addEventListener("submit", handleUserRegister);
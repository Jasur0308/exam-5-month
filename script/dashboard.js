const $addForm = document.querySelector("#createForm");

const getInputValue = (field) => {
    return document.querySelector(`.inputElement[data-field="${field}"]`).value;
};

function Blog(title, image, tags, description) {
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.description = description;
}

const createNewPost = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token); // Verify token retrieval

    if (!token) {
        console.error("No token found in localStorage.");
        return;
    }

    let newPost = new Blog(
        getInputValue('title'),
        getInputValue('image'),
        getInputValue('tags'),
        getInputValue('description')
    );
    console.log("New Post Object:", newPost);

    try {
        const response = await fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newPost)
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Response Data:", data);
        } else {
            throw new Error(data.message || 'Something went wrong');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

$addForm.addEventListener("submit", createNewPost);
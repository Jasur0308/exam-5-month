const $userName = document.querySelector("#userName");

function loadData() {
    axios(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs`, {
        headers: {
            "Authorization":  `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        $userName.innerHTML = response.data.name;
    })
}

loadData();


function login() {
    console.log("ss")
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var csrf = document.getElementById('csrf').value
    console.log("ss")
    if (username == "" && password == "") {
        alert('you must enter both')
    }
    else{
    var data = {
        'username': username,
        'password': password
    }
    fetch('api/login/', {
        method: "post",
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrf,
        },
        'body': JSON.stringify(data)
    }).then(result => result.json())
        .then(response => {
            if (response.status == 200) {
                window.location.href = 'dashboard/'
            }
            else {
                alert(response.message)
            }
        })
    }
}



function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var csrf = document.getElementById('csrf').value;
    if (username == "" || password == "" || email == "") {
        alert('you must enter in all rows')
    }
    else {

    
    var data = {
        'username': username,
        'email': email,
        'password': password,
    }

    fetch('api/register/', {
        method: "post",
        headers: {
            'content-type': 'application/json',
            'x-CSRFToken': csrf
        },
        'body': JSON.stringify(data)
    }).then(result => result.json())
        .then(response => {
            if (response.status == 200) {
                alert(response.message)
                window.location.href = '/'
            }
            else {
                alert(response.message)
            }
        })
    }
}



const postsBox = document.getElementById('posts-box')
console.log(postsBox)
const loadBtn = document.getElementById('load-btn')
const loadBox = document.getElementById('loading-box')
let visible = 3

const handleGetData = () => {
    $.ajax({
        type: 'GET',
        url: `/posts-json/${visible}/`,
        success: function(response){
            maxSize = response.max
            const data = response.data
            // spinnerBox.classList.remove('not-visible')
            setTimeout(()=>{
                // spinnerBox.classList.add('not-visible')
                data.map(post=>{
                    console.log(post.id)
                    postsBox.innerHTML += `<div class="card p-3 mt-3 mb-3">
                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SR</th>
                        <th scope="col">Compony Name</th>
                        <th scope="col">LTP</th>
                        <th scope="col">Change</th>
                        <th scope="col">Buy Price</th>
                        <th scope="col">Sell Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">${post.id}</th>
                        <td>${post.company_name}</td>
                        <td>${post.ltp}</td>
                        <td>${post.change}</td>
                        <td>${post.buyprice}</td>
                        <td>${post.sellprice}</td>
                      </tr>
                    </tbody>
  
                    </div>`
                })
                if(maxSize){
                    console.log('done')
                    loadBox.innerHTML = "<h4>No more posts to load</h4>"
                }
            }, 500)
        },
        error: function(error){
            console.log(error)
        }
    })
}

handleGetData()

loadBtn.addEventListener('click', ()=>{
    visible += 3
    handleGetData()
})


function detail(){
    fetch('detail')
}


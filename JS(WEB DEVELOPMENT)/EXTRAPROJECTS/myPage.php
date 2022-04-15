<!DOCTYPE html>
<html>
<title>LOGIN_SIGNUP</title>
<head>
    <style>
    i {
        margin-top: 2rem;
        color: #0080ff;
        font-size: 2rem;
    }

    input {
        border: 1px solid #0080ff;
        border-radius: 0.3rem;
        padding: 3%;
        color: #0080ff;
        width: 100%;
        box-shadow: 0px 0px 1px 1px #0080ff;
    }

    button {
        margin-left: 2.5%;
        border: 1px solid #0080ff;
        background-color: transparent;
        font-size: 1rem;
        color: #0080ff;
        border-radius: 0.5rem;
        padding: 3%;
        text-align: center;
        width: 80%;
        box-shadow: 1px 1px 1px 1px #0080ff;
    }

    .main {
        line-height: 4rem;
        text-align: center;
        background-color: white;
        color: #0080ff;
        width: 18rem;
        height: 24rem;
        border-radius: 2%;
        padding: 3%;
        font-size: 3rem;
        box-shadow: 2px 2.5px 3px 3px rgb(20, 20, 20);
    }

    body {
        background-color: #0080ff;
        display: flex;
        justify-content: center;
        margin: 6%;
    }

    input:hover {
        cursor: pointer;
        box-shadow: 0 3px 5px #0080ff;

    }

    button:hover {
        background-color: #0080ff;
        color: white;
        cursor: pointer;
        border-radius: 0.5rem;
    }
    </style>
</head>
<body>
    <div class="main">
        <i id="logo" class="fas fa-user-lock"></i>
        <input id="content1" placeholder="Your name...">
        <input id="content2" placeholder="Your password...">
        <button id="save" onclick="save()">Submit!</button>
        <br>
        <a href="https://about.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.google.com/" target="_blank"><i class="fab fa-google"></i></a>
    </div>
    <script src="https://kit.fontawesome.com/6b52d0ce66.js" crossorigin="anonymous"></script>
</body>

</html>
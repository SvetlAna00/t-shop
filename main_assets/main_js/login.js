let BtnLogin = document.querySelector('#btn_login');

BtnLogin.onclick = (event) => {
    event.preventDefault();

    let loginEmail = document.querySelector('#login_email').value;
    let loginPass = document.querySelector('#login_pass').value;

    let data = {
        "login": loginEmail,
        "pass": loginPass
    }

    let login = (result) => {
        if (result.login == "" || result.pass == "") {
            if (result.login == "") {
                document.querySelector('#login_email').style.border = "1px solid #f00";
            }
            else {
                document.querySelector('#login_pass').style.border = "1px solid #f00";
            }
        }

        else {
            document.querySelector('#login_email').style.border = "";
            document.querySelector('#login_pass').style.border = "";
            console.log(result);
            // result = JSON.parse(result);
            // var d = new Date();
            // d.setTime(d.getTime() + (24 * 24 * 60 * 1000));
            // var expires = d.toUTCString();
            // document.cookie = `email=${result.login}; pass=${result.pass}; expires=${expires}`;
            // // location.href = "cabinet.php";
            console.log(document.cookie)
        }
    }

    login(data);
}
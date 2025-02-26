document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let agree = document.getElementById("agree").checked;

    if (!agree) {
        alert("ກະລຸນຍອມຮັບເງຶ່ອນໄຂ");
        return;
    }

    if (username === "Phouthasin" && password === "1234") {
        alert("ເຂົ້າສູ່ລະບົບສຳເລັດ!");
        window.location.href = "success.html";
    } else {
        alert("ຊື່ບໍ່ຖືກຕ້ອງ!");
    }
});

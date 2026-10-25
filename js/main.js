document.getElementById("helloBtn").addEventListener("click", function () {
    document.getElementById("message").textContent =
        "你好，欢迎来到雀巢001！🎉 现在是 " + new Date().toLocaleTimeString();
});

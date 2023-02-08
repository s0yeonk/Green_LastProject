const footer = document.querySelector('#footer');

fetch('/LastProject/footer/footer.html')
.then(res => res.text())
.then(data => footer.innerHTML = data)
console.log("hello world");
let val = 1;
class Book {
    constructor(BookName, author, type) {
        this.bn = BookName;
        this.a = author;
        this.t = type;
    }
    Display() {
        let x = document.getElementById('tbbody');
        let s = `<tr>
        <td>${val}</td>
        <td>${this.bn}</td>
        <td>${this.a}</td>
        <td>${this.t}</td>
      </tr>`;
        x.innerHTML += s;
        val += 1;
    }
}
let addbk = document.getElementById('btn2');
addbk.addEventListener('click', initiate);
function initiate(e) {
    let bkname = document.getElementById('bkname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let auto = document.getElementById('auto');
    let curri = document.getElementById('curri');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (auto.checked) {
        type = auto.value;
    }
    else if (curri.checked) {
        type = curri.value;
    }
    if (bkname.length >= 3 && author.length >= 2) {
        let obj = new Book(bkname, author, type);
        obj.Display();
        fiction.checked = true;
        document.getElementById('myform').reset();
        alertthem(true);
    }
    else {
alertthem(false);
fiction.checked = true;
document.getElementById('myform').reset();
    }
}
function alertthem(n) {
    let app = document.getElementById('appy');
    let element = document.createElement('div');
    if (n) {
        element.innerHTML = `<div class="alert alert-success" role="alert">
        <h4 class="alert-heading">BOOK ADDED!</h4>
      </div>`;
    app.appendChild(element);
    setTimeout(function () {
        element.innerHTML = ''
    }, 1000);
    }
    else{
    element.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy Fuck!</strong> You should check in on some of those fields you entered below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" id='close'>
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
    app.appendChild(element);
   let close=document.getElementById('close');
   close.addEventListener('click',function(e){
       app.removeChild(element);
   });
    }
}
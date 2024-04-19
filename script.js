{//Check ticket amount
    var ticketAmount = 0;

    function decrByOne(fieldId) {
        var x = document.getElementById(fieldId).value;
        if (x == 0) {
            document.getElementById(fieldId).value = x;
        } else {
            document.getElementById(fieldId).value = --x;
        }
        updateTicketAmount();
        console.log(ticketAmount);
    }
    
    function incrByOne(fieldId) {
        var x = document.getElementById(fieldId).value;
        document.getElementById(fieldId).value = ++x;
        ++ticketAmount; //hàm xong thì tăng tA lên 1
        updateTicketAmount();
        console.log(ticketAmount);
    }
    
    function updateTicketAmount() {
        var a = Number(document.getElementById("quantity-field1").value);
        var b = Number(document.getElementById("quantity-field2").value);
        var c = Number(document.getElementById("quantity-field3").value);
        ticketAmount = a + b + c;
    }
    
    function checkTicketAmount(fieldId) {
        if (ticketAmount <= 7)
        {
            incrByOne(fieldId)
        } else {
            window.alert('The maximum amount of tickets is 8!');
        }
    }}
    
    {// Toggle functions
    function toggleFocusMFH(element) {
        // Loại bỏ class "movie-info--hours-option-focus" khỏi tất cả các thẻ li trong ul
        document.querySelectorAll('ul.movie-info--hours-ulist li.movie-info--hours-list button.movie-info--hours-option').forEach(function(a) {
            a.classList.remove('movie-info--hours-option-focus');
        });
    
        // Thêm class "movie-info--hours-option-focus" vào thẻ li được nhấp
        element.classList.add('movie-info--hours-option-focus');
    }
    
    function toggleFocusCSS(element) {
         // Kiểm tra xem thẻ div có class "selected" không
        if (element.classList.contains('selected')) {
            // Nếu có, không làm gì cả
        } else {
            if (element.classList.contains('selecting') || element.classList.contains('selecting-double')) {
                element.classList.remove('selecting');
                element.classList.remove('selecting-double');
            } else {
                // Nếu không, thêm class "selecting"
                if (element.classList.contains('double')) {
                    element.classList.add('selecting-double');
                } else {
                    element.classList.add('selecting');
                }   
            }
        }
    }
    
    function toggleFocusMIO(element) {
        // Loại bỏ class "movie-info--option-active" khỏi tất cả các thẻ li trong ul
        document.querySelectorAll('ul.movie-info--dates-list li.movie-info--date div.movie-info--option').forEach(function(div) {
            div.classList.remove('movie-info--option-active');
        });
    
        // Thêm class "movie-info--option-active" vào thẻ li được nhấp
        element.classList.add('movie-info--option-active');
    }}
    
    {//Change Slide based on Date
    function sliderChange(x) {
        document.getElementById("myRange").value = x;
    }}
    
    {// Timer
    let time = 300; //5 phút
    const countdownEl = document.getElementById("countdown-timer");
    
        //Refresh mỗi 1s
    setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        if (time < 0) {
            window.alert('Ticket holding time expired. Please restart the booking process!');
            location.reload();
            time = 300;
        } else {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
        
            minutes = '0' + minutes;
            seconds = seconds < 10? '0' + seconds : seconds;
            
            countdownEl.innerHTML = minutes + ':' + seconds;
            time--;
        }
    }}
    
    // Update Sticky
    function updateSticky(fieldId) {
        document.getElementById("movie-type").innerHTML = document.getElementById(fieldId).value;
        document.getElementById("movie-screen").innerHTML = document.getElementById(fieldId).getAttribute("data-value1");
        document.getElementById("movie-time").innerHTML = document.getElementById(fieldId).getAttribute("data-value2");
    }
    
    function updateSticky2(fieldId) {
        document.getElementById("movie-date").innerHTML = document.getElementById(fieldId).getAttribute("data-value1");
    }
    
        //Update Sticky - Seats
    var selectedSeats = [];
    
    function updateStickySeats(fieldId) {
        //Check số ghế phải bằng số vé
        if (selectedSeats.length == ticketAmount) {        
            window.alert('You have already chosen enough seats according to your desired number of tickets!');
            toggleFocusCSS(document.getElementById(fieldId));
        } else {
            //Kiểm tra xem người dùng có muốn hủy chọn ghế không
            if (document.getElementById(fieldId).classList.contains(selecting || double-selecting)) {
                selectedSeats.splice(document.getElementById(fieldId).innerText);
                document.getElementById('movie-seats').innerHTML = selectedSeats;
            } 
            else {
                selectedSeats.push(document.getElementById(fieldId).innerText);
                document.getElementById('movie-seats').innerHTML = selectedSeats;
            }
        }
    }
    

// LOGIN

function LoginForm() {
    var login_form = `<div class="modal">
        <div class="modal_overlay" onclick="CloseForm()">
        </div>
        <div class="modal_body">
            <div class="login">
                <div class="logo hide-on-mobile">
                    <img src="../img/image-removebg-preview (2).png" alt="" class="logo_img">
                </div>
                <div class="account">
                    <div class="account_container">
                        <h1 class="account_container-header">Login into your account</h1>
                        <form class="account_container-form">
                            <div class="account_container-form--group-login">
                                <label for="email">Email or Phone</label>
                                <input type="email" id="email" name="email">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="img_email" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>

                            <div class="account_container-form--group-login">
                                <label for="Password">Password</label>
                                <input type="password" id="Password" name="Password">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="img_lock" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            <div class="FAQ">
                                <div class="FAQ_remember">
                                    <input type="checkbox" id="remember">
                                    <label>Remember Me</label>
                                </div>
                                <div class="FAQ_forgot">
                                    <a href="" >Forgot Password?</a>
                                </div>
                            </div>
                            <div class="button_container ">
                                <button class="btn btn_LOGIN">LOGIN NOW</button>
                            </div>
                            <div class="OR_container">
                                <div class="line"></div> 
                                <p class="OR">OR</p>
                                <div class="line"></div> 
                            </div>
                            <div class="button_container">
                                <button id="signup-button" onclick="RegisterForm()" class="btn">SIGN UP NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </div>
    </div>`

    document.getElementById('login_register_form').innerHTML = login_form;
}

function RegisterForm(){
    var register_form = `<div class="modal">
    <div class="modal_overlay" onclick="CloseForm()">
    </div>
    <div class="modal_body">
        <div class="register">
            <div class="logo hide-on-mobile">
                <img src="../img/image-removebg-preview (2).png" alt="" class="logo_img">
            </div>
            <div class="account">
                <div class="account_container">
                    <h2 class="account_container-header-register">Create your account</h2>
                    <form class="account_container-form">
                        <div class="account_container-form--group">
                            <div class="form_group">
                                <label for="FullName">Full Name</label>
                                <input type="text" id="FullName" name="FullName">
                            </div>
                            <div class="form_group">
                                <label for="phone">Phone</label>
                                <input type="text" id="Phone" name="phone">
                            </div>
                        </div>
                        <div class="account_container-form--group">
                            <label for="Email">Email</label>
                            <input type="text" id="Email" name="Email">
                        </div>
                        <div class="account_container-form--group">
                            <label for="Password">Password</label>
                            <input type="password" id="Password" name="Password">
                        </div>
                        <div class="account_container-form--group">
                            <label for="reconfirm">Confirm Password</label>
                            <input type="password" id="reconfirm" name="reconfirm">
                        </div>
                        <div class="button_container">
                            <button class="btn">CREATE ACCOUNT</button>
                        </div>
                        <p class="account_text">Do you already have an account?
                            <a href="#" onclick="LoginForm()">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById('login_register_form').innerHTML= register_form;
}

function CloseForm() {
    var modalOverlay = document.querySelector('.modal_overlay');
    var modal = modalOverlay.closest('.modal');
    modal.style.display = 'none';
}

function transfer(url) {
    window.location.href = url;
  }
  
// NO_SCHEDULE


var date = new Date();

console.log(date.getDay);
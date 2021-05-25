<?php

function contactMain() {
    echo ' <main class="main" id="main">
    <div id="myModal" class="modal hidden">

        <!-- FORM -->
        <div class="modal-content">
            <form action="/action_page.php">
                <div class="exit-btn"><i class="fas fa-times" id="exit"></i></div>
                <label for="fname">First Name<span class="red">  *</span></label>
                <input type="text" id="fname" name="firstname" placeholder="Your First Name.." required><br />

                <label for="lname">Last Name<span class="red">  *</span></label>
                <input type="text" id="lname" name="lastname" placeholder="Your Last Name.." required><br />

                <label for="phone">Phone<span class="red">  *</span></label>
                <input type="tel" id="phone" name="tel" placeholder="Your Phone Number.." required><br />

                <label for="mail">Email<span class="red">  *</span></label>
                <input type="email" id="mail" name="email" placeholder="Your Email.." required><br /><br /><br />


                <label for="comments">-Review/Comments-</label>
                <textarea id="comments" name="comments" rows="4" cols="50">
                Place Text Here..
                </textarea><br />
                <span class="btn-container">
                    <input type="submit" value="Submit" id="submit" class="submit-btn"><br />
                    <input type="submit" value="Cancel" id="cancel" class="cancel-btn"><br />
                </span>
                <div class="social modal-social">
                    <a href="https://www.facebook.com/dev.dollinger" alt="My Facebook Page" target="_blank"><i
                            class="fab fa-facebook-square fa-5x"></i></a>
                    <a href="https://github.com/edolly2" alt="My GitHub Page" target="_blank"><i
                            class="fab fa-github-square fa-5x"></i></a>
                    <a href="https://stackexchange.com/users/20534397/edolly2" alt="My Stack Overflow Page" target="_blank"><i class="fab fa-stack-overflow fa-5x"></i></a>
                    <a href="https://twitter.com/DevDollinger" alt="My Twitter Page" target="_blank"><i
                            class="fab fa-twitter-square fa-5x"></i></a>
                    <a href="https://www.linkedin.com/in/eric-dollinger-967876202/" alt="My Linkedin Page" target="_blank"><i class="fab fa-linkedin fa-5x"></i></a>
                </div>
            </form>
        </div>

    </div>

    <div class="card-container">
        <div class="flip-card" id="tele">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <i class="card-icon fas fa-phone-square fa-10x"></i>
                </div>
                <div class="flip-card-back">
                    <h2>Cell Phone</h2>
                    <p>
                        <a href="tel:402-708-5866"><br /><br /><br /><br />CLICK TO CALL OR TEXT</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="flip-card" id="email">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <i class="card-icon fas fa-envelope-open-text fa-10x"></i>
                </div>
                <div class="flip-card-back">

                    <h2>E-mail</h2>
                    <p>
                        <a href="mailto:edolly2@protonmail.com"><br /><br /><br /><br />CLICK TO EMAIL</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="flip-card" id="map">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <i class="card-icon fas fa-paper-plane fa-10x"></i>
                </div>
                <div class="flip-card-back">
                    <h2>Other Ways Of Contact</h2>
                    <button class="form-btn" id="form-btn">Get in Touch!</button>




                </div>
            </div>
        </div>
    </div>

</main>
<div class="toast" id="snackbar">Thank you! Eric will recieve your message soon!</div>';
}

?>
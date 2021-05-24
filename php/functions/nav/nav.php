<?php

function nav() {
    echo '<aside>
    <nav id="myNav" class="nav" role="navigation" aria-label="main menu">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="landing.php" id="home">HOME</a>
        <a href="bio1.php" id="about">ABOUT</a>
        <a href="projects.html" id="projects">PROJECTS</a>
        <a href="contact.php" id="contact">CONTACT</a>
    </nav>
</aside>';
}

?>
<body>
    <!-- MAIN HOME PAGE -->
    <div id="page">
        <!-- HEADER -->
        <header>
            <div class="header">
                <div class="nav-menu-btn-cont">
                    <i class="fas fa-chevron-circle-right nav-menu-btn"></i>
                </div>
                <div class="logo-cont">
                    <a href="<?php echo url_for('index.php'); ?>"><img src="<?php echo url_for('assets/images/logo.png'); ?>" alt="Eric Dollinger's Logo" class="logo"></a>
                </div>
            </div>
        </header>

        <!-- TITLE AND PARA -->
        <div class="home-title-cont">
            <h1 id="home-title">Eric Dollinger</h1>
        </div>
        <div class="home-main-p-cont">
            <p class="home-main-p">My name is Eric Dollinger and I am a Front End Developer.<br /> I am very passionate
                about what I do.<br /> Look around and find out more!
            </p>
        </div>
    </div>
    <!-- MAIN -->
    <main>
        <!-- NAV MENU -->
        <div class="nav-menu-cont" id="navCont">
            <div class="nav-menu-exit-btn-cont">
                <i class="fas fa-times-circle nav-menu-exit-btn exit-btn"></i>
            </div>
            <nav class="nav-menu">
                <ul>
                    <li id="about" class="nav-link"><a href="<?php echo url_for('about/index.php'); ?>">About</a></li>
                    <li id="projects" class="nav-link"><a href="<?php echo url_for('projects/index.php'); ?>">Projects</a></li>
                    <li id="contact" class="nav-link"><a href="<?php echo url_for('contact/index.php'); ?>">Contact</a></li>
                </ul>
            </nav>
        </div>
<?php
$titleClass = "about-head";
$title = "About Me";
?>

<?php
require __DIR__ . '/php/functions/require.php';
echo doctype();
?>

<head>

<?php
echo head();
?>
<link rel="stylesheet" href="css/about.css">
<style>
        #about {
            color: yellow;
            text-decoration: line-through; 

    </style>
</head>
<body class="grid-container">
<header class="grid-head">
<h1 class=<?php echo "$titleClass"; ?>><?php echo $title; ?></h1>
    <?php
    echo allHeader();
    ?>
</header>

    <?php
    echo nav();
    ?>

    <?php
    echo aboutMain();
    ?>

    <?php
    echo footer();
    ?>

</body>
</html>
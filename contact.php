<?php
$titleClass = "contact-head";
$title = "Contact";
?>

<?php
require __DIR__ . '/php/functions/require.php';
echo doctype();
?>

<head>

<?php
echo head();
?>
<link rel="stylesheet" href="css/contact.css">
<link rel="stylesheet" href="css/contact_form.css">
<script src="js/main.js" defer></script>
<style>
        #contact {
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
    echo contactMain();
    ?>

    <?php
    echo footer();
    ?>

</body>
</html>
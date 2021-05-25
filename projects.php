<?php
$titleClass = "projects-head";
$title = "Projects";
?>

<?php
require __DIR__ . '/php/functions/require.php';
echo doctype();
?>

<head>

<?php
echo head();
?>
<link rel="stylesheet" href="css/projects.css">
<style>
        #projects {
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
    echo projectsMain();
    ?>

    <?php
    echo footer();
    ?>

</body>
</html>
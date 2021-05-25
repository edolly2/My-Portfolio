<?php
require __DIR__ . '/php/functions/require.php';
echo doctype();
?>

<head>

<?php
echo head();
?>
<style>
        #home {
            color: yellow;
            text-decoration: line-through; 

    </style>
</head>
<body class="grid-container">
    
    <?php
    echo homeHeader();
    ?>

    <?php
    echo nav();
    ?>

    <?php
    echo homeMain();
    ?>

    <?php
    echo footer();
    ?>

</body>
</html>
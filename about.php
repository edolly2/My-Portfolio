<?php
require __DIR__ . '/php/functions/require.php';
echo doctype();
?>

<head>

<?php
echo head();
?>
<link rel="stylesheet" href="css/biocard.css">
<style>
        #about {
            color: yellow;
            text-decoration: line-through; 

    </style>
</head>
<body>
    <?php

    echo topHeader();

    ?>
    <?php

    echo nav();
    ?>

    <?php

    echo main();
    
    ?>

    <?php

    echo footer();
    
    ?>

</body>
</html>
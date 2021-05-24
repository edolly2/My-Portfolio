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
    $test = '<button class="test">test</button>';
    echo $test;
    ?>

</body>
</html>
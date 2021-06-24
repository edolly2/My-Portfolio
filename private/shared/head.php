<?php 
    if(!isset($page_title)) {
        $page_title = "Eric Dollinger's Portfolio";
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#00013d">
    <meta name="description" content="Eric Dollinger's Portfolio Website | Front-end Developer">
    <meta name="HandheldFriendly" content="true">
    <meta name="robots" content="index,follow">
    <meta name="googlebot" content="index,follow">
    <meta name="google" content="nositelinkssearchbox">
    <meta name="google" content="notranslate">
    <meta name="subject" content="Eric Dollinger">
    <link rel="icon" sizes="192x192" href="<?php echo url_for('/assets/images/logo.png'); ?>">
    <link rel="canonical" href="index.php">
    <title><?php echo h($page_title); ?></title>
    <link rel="stylesheet" href="<?php echo url_for('/css/RESET.css'); ?>">
    <link rel="stylesheet" href="<?php echo url_for('/css/normalize.css'); ?>">
    <link rel="stylesheet" href="<?php echo url_for('/assets/typography/typography.css'); ?>">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="<?php echo url_for('/css/styles.css'); ?>">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
        <script src="<?php echo url_for('/js/app.js'); ?>" defer></script>
</head>
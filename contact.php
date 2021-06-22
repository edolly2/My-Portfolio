<?php 

$name = "";
$email = "";
$comment = "";
$nameErr = "";
$emailErr = "";
$commentErr = "";
$ERRORS = false;
// REQUIRED FIELDS AND VALIDATE
if($_SERVER["REQUEST_METHOD"] == "POST") {
    if(empty($_POST["name"])) {
        $nameErr = "*Name Required";
        $ERRORS = true;
    }
    else {
        $name = test_input($_POST["name"]);
        if(!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "*Only Letters and Spaces Allowed";
            $ERRORS = true;
        }
    }
    if(empty($_POST["email"])) {
        $emailErr = "*Email Required";
        $ERRORS = true;
    }
    else {
        $email = test_input($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "*Invalid Email Format";
            $ERRORS = true;
        }
    }
    if(! $_POST["comment"]) {
        $commentErr = "*Please Leave a Short Message With Any Concerns or Questions";
        $ERRORS = true;
    }
    else{
        $comment = test_input($_POST["comment"]);
    }
}

// $sanitized = false;

// SANITIZE INPUT
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
// $entry = "Name: $name \n\n Email: $email\n\n Message: $comment";
// file_put_contents("message.txt", $entry, FILE_APPEND);
// echo "<h3>THANKS</h3>"
    
    
    // foreach($_POST as $names => $value) {
    //     if($ERRORS == false) {
    //         $senderName = $_POST["name"];
    //         $senderEmail = $_POST["email"];
    //         $senderComment = $_POST["comment"];
    //     }
    //     $to = "Eric Dollinger<edolly2@gmail.com>";
    //     $subject = "Portfolio Website Message";
    //     $message = "MESSAGE FROM: " . $senderName . "\n\n EMAIL IS:" . $senderEmail . "\n\n MESSAGE:" . $sendercomment;
    //     if(mail($to, $subject, $message)) {
    //         echo "<h3>Your Message Was Sent.</h3>";
    //     }
    // }

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
    <link rel="icon" sizes="192x192" href="assets/images/logo.png">
    <link rel="canonical" href="index.html">
    <title>Eric Dollinger's Portfolio</title>
    <link rel="stylesheet" href="css/RESET.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="assets/typography/typography.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./css/styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
        <script src="js/app.js" defer></script>
</head>

<body class="form-page">

 <!-- WRITE ME -->
 <!-- action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" -->

                    <div">
                        <div class="form-exit-btn-cont exit-cont">
                            <i class="fas fa-times-circle exit-btn form-exit-btn"></i>
                        </div>
                        <div class="form-cont">
                            <h2 class="form-title">Your Input Is Greatly Appreciated!</h2>
                            <form class="write-me-form" method="post"> 
                                <p><span class="red">* Required Field</span></p>
                                <label for="name">Name <span class="red">*</span></label><br/>
                                <input type="text" name="name" id="name" class="is-focus form-input" value="<?php echo htmlspecialchars($name); ?>">
                                <span class="error"><?php echo htmlspecialchars($nameErr); ?></span><br/>
                                <label for="email">E-mail <span class="red">*</span></label><br/>
                                <input type="text" name="email" id="email" class="is-focus form-input" value="<?php echo htmlspecialchars($email); ?>">
                                <span class="error"><?php echo $emailErr; ?></span><br/>
                                <label for="comment">Comments <span class="red">*</span></label><br/>
                                <span class="error"><?php echo $commentErr; ?></span><br/>
                                <textarea name="comment" id="comment" class="is-focus" cols="38"
                                rows="15"><?php echo htmlspecialchars($comment); ?></textarea><br />
                                <input type="submit" value="Send" id="submit">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
             
        </body>
        
</html>
<?php
$senderName = '';
$senderEmail = '';
$senderComment = '';
$name = '';
$email = '';
$comment = '';
$nameErr = '';
$emailErr = '';
$commentErr = '';
$ERRORS = false;
// REQUIRED FIELDS AND VALIDATE
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    global $ERRORS;
    if (empty($_POST["name"])) {
        $nameErr = "*Name Required";
        $ERRORS = true;
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "*Only Letters and Spaces Allowed";
            $ERRORS = true;
        }
    }
    if (empty($_POST["email"])) {
        $emailErr = "*Email Required";
        $ERRORS = true;
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "*Invalid Email Format";
            $ERRORS = true;
        }
    }
    if (empty($_POST["comment"])) {
        $commentErr = "*Please Leave a Short Message With Any Concerns or Questions";
        $ERRORS = true;
    } else {
        $comment = test_input($_POST["comment"]);
    }
}

// $sanitized = false;

// SANITIZE INPUT
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
// $entry = "Name: $name \n\n Email: $email\n\n Message: $comment";
// file_put_contents("message.txt", $entry, FILE_APPEND);
// echo "<h3>THANKS</h3>"


foreach($_POST as $names => $value) {
    if($ERRORS == false) {
        $senderName = $_POST["name"];
        $senderEmail = $_POST["email"];
        $senderComment = $_POST["comment"];
    }
    $to = "Eric Dollinger<edolly2@gmail.com>";
    $subject = "Portfolio Website Message";
    $message = "MESSAGE FROM: " . htmlentities($senderName) . "\n\n EMAIL IS:" . $senderEmail . "\n\n MESSAGE:" . htmlentities($senderComment);
    if(mail($to, $subject, $message)) {
        echo "<h3>Your Message Was Sent.</h3>";
    }
}

?>


<div class="form-page">

    <!-- WRITE ME -->
    <div class="form-cont">
        <div class="form-exit-btn-cont exit-cont">
            <i class="fas fa-times-circle exit-btn form-exit-btn"></i>
        </div>
        <h2 class="form-title">Your Input Is Greatly Appreciated!</h2>
        <form action="<?php echo h($_SERVER["PHP_SELF"]); ?>" method="POST" id="message-form" class="write-me-form">
            <label for="name">Name <span class="red">*</span></label><br />
            <input type="text" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> name=" name" id="name" class="is-focus form-input" value="<?php echo htmlspecialchars($name); ?>">
            <span class="error"><?php echo htmlspecialchars($nameErr); ?></span><br />
            <label for="email">E-mail <span class="red">*</span></label><br />
            <input type="text" name="email" id="email" class="is-focus form-input" value="<?php echo htmlspecialchars($email); ?>">
            <span class="error"><?php echo $emailErr; ?></span><br />
            <label for="comment">Comments <span class="red">*</span></label><br />
            <span class="error"><?php echo $commentErr; ?></span><br />
            <textarea name="comment" id="comment" class="is-focus" style="width: 60%"; rows="10"><?php echo htmlspecialchars($comment); ?></textarea><br />
            <input type="submit" value="Send" id="submit" name="submit">
        </form>
    </div>
</div>
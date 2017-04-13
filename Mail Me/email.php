<?php
extract($HTTP_GET_VARS);
extract($HTTP_POST_VARS);
if ($action == "send")
{
include("config.php");
$to = $ademail;
$from = $_REQUEST['from'];
$name = $_REQUEST['fullname'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

$to = trim($to);
$from = trim($from);
$name = trim($name);
$subject = trim($subject);
$message = trim($message);

if (empty($to))
{
$ermessage = "Error: Email address to can not be blank, Please enter your email address in the config file!";
include("_inc/email_error.htm"); exit();
}
if (empty($from))
{
$ermessage = "Error: Email address can not be blank, Please enter your email address!";
include("_inc/email_error.htm"); exit();
}
if (!ereg('^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+'.
'@'.
'[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.'.
'[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$', $from))
{
$ermessage = "Error: Invalid Email address, Please re-enter your email address!";
include ("_inc/email_error.htm"); exit;
}
if (empty($name))
{
$ermessage = "Error: Please enter your name!";
include("_inc/email_error.htm"); exit();
}
if (empty($subject))
{
$ermessage = "Error: Subject can not be blank, Please enter email subject";
include("_inc/email_error.htm"); exit();
}
if (empty($message))
{
$ermessage = "Error: Message body can not be blank, Please enter email message";
include("_inc/email_error.htm"); exit();
}
$footer = "\n_______________________________________\nMail Me!, php script by http://www.syndikut.org\nCopyright 2005 Syndikut.org";
$message = $message."\n".$footer;
$send = mail($to, $subject, $message, "From: {$from}");
if ($send)
{
include("_inc/email_sent.htm"); exit();
}
else
{
$ermessage = "Error: You message has not been sent, please try again";
include("_inc/email_error.htm"); exit();
}
}
else
{
include("_inc/email.htm");
}
?>

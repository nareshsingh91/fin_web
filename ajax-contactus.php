<?php
//database connection starts
//root is username, password is blank, mydatabase is badabase name
//$password='';
$conn=mysqli_connect('localhost','prod_bankse_web','mNUSnW5WF237SF','prod_bankse')
or die(mysqli_connect_error(''));
//database connection starts

//function to secure the data start
function msecure($db,$data)
{
        $data = trim($data);		
		$data = stripslashes($data);
		$data = mysqli_real_escape_string($db, $data);
        return $data;
}
//function to secure the data end

//input recevied from query form starts
$name  = msecure($conn,$_POST['nm']);
$email = msecure($conn,$_POST['em']);
$phone = msecure($conn,$_POST['pm']);
$comment = msecure($conn,$_POST['ms']);
//input recevied from query form end


if($name!='' && $email!=''){
$to = $email;
$cc = 'naresh.singh@rattanindia.com';
$subject = "Your query has been successfully submited";

//insert query in database starts
$getInstQury = mysqli_query($conn,"INSERT INTO tbl_queries (qry_name, qry_email, qry_phone, qry_message) VALUES ('$name', '$email', '$phone', '$comment')");

//php mail function
$message = "Dear Customer,<br><br>
Thanks for your Query, our team will contact you soon<br><br> 
Regards,<br>Bankse Team";  
	
$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html;charset=UTF-8' . "\r\n";
		$headers .= 'From: <support@bankse.in>' . "\r\n";
		$headers .= "CC: $cc\r\n";
		
        //mail($to, $subject, $message, $headers);
echo "<p style='color: #047c4c; font-size: 16px; margin: 0px; padding: 0px;'>Thanks for your Query, our team will contact you soon</p>";
}else{
	    echo "Some technical issues, please try again or sent a mail at support@wefin.in";
}
		
?>
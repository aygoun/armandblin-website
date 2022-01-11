<?php 

    $viguier = "viguier";
    $saintclair = "saintclair";
    $projetS2 = "projetS2";

    $finalURL = "";

    switch ($_GET['c']) {
        case $viguier:
            $finalURL = "http://projects.armandblin.com/viguier/";
            break;
        case $saintclair:
            $finalURL = "https://domainedesaintclair.com/";
            break;
        case $projetS2:
            $finalURL = "https://aygoun.github.io/Attack-On-Castle-Web.github.io/";
            break;
        default:
            $finalURL = "";
            break;
    }
    
    if ($finalURL != ""){
        $location = "Location: $finalURL";
        echo "<h3>Redirecting to : $location.</h3>";
        header($location);
    }else{
        echo "<h3>Code unknown.\n Redirecting to : armandblin.com/</h3>";
        header('Location: https://armandblin.com/');
    }
    
?>
<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Les Classes - La Nativité</title>

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="css/scrolling-nav.css" rel="stylesheet">
<style type="text/css">
@media (min-width: 992px) {
  .option_width{
    width: 370px;
  }
}
table{
  width: 100%;
  margin-top: 0.5em;
  margin-right: 0em;
  margin-left: 0em;
  margin-bottom: 0.5em;
  border: 1px solid #dae0e5;
}
</style>
</head>
<body style="width: 100%; margin">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="index.html">classroom | peewix</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active js-scroll-trigger" href="register.php">Les classes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="index.html#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div style="margin-top: 5em;">
    <div class="row"  style="width: 100%;">
      <div class="col-md-2"></div>

      <div class="col-md-8" style="text-align: justify;margin: auto; margin-left: 1.9em;">
        <p style="font-weight: 600"><span style="margin-left:0em;text-decoration: underline;">Classe de 1ère <?= $classes ?> :</span>
          <br>
          <span style="">Nous vous conseillons d'actualiser la page dans plusieurs heures/jours et de partager le lien du site internet.</span></p>
        <a href="register.php"><p>Voir les autres classes</p></a>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Instagram</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="max-width:5em;overflow: scroll;" scope="row"><a href="#">Nothing</a></td>
              <td style="max-width:5em;overflow: scroll;">Nothing</td>
              <td style="max-width:5em;overflow: scroll;">Nothing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="py-5 bg-dark sticky-bottom">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; classroom 2019</p>
      <p style="color: white; text-decoration: none; text-align: center;">Site web développé par <a href="https://armandblin.com/">Armand BLIN</a></p>
    </div>
    <!-- /.container -->
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom JavaScript for this theme -->
  <script src="js/scrolling-nav.js"></script>

</body>

</html>

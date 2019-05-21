<footer class="footer">
        <div class="container-fluid">
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Livechat
              </a>
            </li>
            <!-- <li class="nav-item">
              <a href="https://www.sucaco.com/" class="nav-link">
                About Us
              </a>
            </li> -->
          </ul>
          <div class="copyright">
            ©
            <script>
              document.write(new Date().getFullYear())
            </script>
            Sucaco
          </div>
        </div>
      </footer>
    </div>
  </div>
  <!--   Core JS Files   -->
  <script src="<?= BASEURL ?>asset/js/core/jquery.min.js"></script>
  <script src="<?= BASEURL ?>asset/js/core/popper.min.js"></script>
  <script src="<?= BASEURL ?>asset/js/core/bootstrap.min.js"></script>
  <script src="<?= BASEURL ?>asset/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <!-- Plugin Cookie -->
  <script src="<?= BASEURL ?>asset/js/plugins/js.cookie.js"></script>
  <!-- Plugin FileSaver -->
  <script src="<?= BASEURL ?>asset/js/plugins/FileSaver.js"></script>
  
  <!--  Google Maps Plugin    -->
  <!-- Place this tag in your head or just before your close body tag. -->
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
  <!-- Chart JS -->
  <script src="<?= BASEURL ?>asset/js/plugins/chartjs.min.js"></script>
  <!--  Notifications Plugin    -->
  <script src="<?= BASEURL ?>asset/js/plugins/bootstrap-notify.js"></script>
  <!-- Moment js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
  <!-- Control Center for Black Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="<?= BASEURL ?>asset/js/black-dashboard.min.js?v=1.0.0"></script>
  <!-- Black Dashboard DEMO methods, don't include it in your project! -->
  <!-- <script src="../assets/demo/demo.js"></script> -->

  <!-- load-overlay -->
  <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.6/dist/loadingoverlay.min.js"></script>

  <script src="<?=BASEURL?>asset/js/socket.io.js"></script>
  <script>
  $(document).ready(function () {
  
  // object cs
  cs = {
    'user_id': <?= $_SESSION['id']?>,
    'username': '<?= $_SESSION['name']?>',
    'nick_name': '<?= $_SESSION['nick_name']?>',
    'level': 'cs',
  };

  // init baseurl
  BASEURL = `<?= BASEURL ?>`;

  });
  </script>
  <script src="<?=BASEURL?>asset/js/main.js"></script>
  <script src="<?=BASEURL?>asset/js/my-template.js"></script>
</body>

</html>
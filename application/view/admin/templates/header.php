<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="<?= BASEURL ?>asset/img/apple-icon.png">
  <link rel="icon" type="image/png" href="<?= BASEURL ?>asset/img/favicon.png">
  <title>
    Black Dashboard by Creative Tim
  </title>
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet" />
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <!-- Nucleo Icons -->
  <link href="<?= BASEURL ?>asset/css/nucleo-icons.css" rel="stylesheet" />
  <!-- CSS Files -->
  <link href="<?= BASEURL ?>asset/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <!-- <link href=assets/demo/demo.css" rel="stylesheet" /> -->
  <style>
  body{

background: #ddd;

}

a {
			
			text-decoration: none !important;
			
		}
		
		label {
			
			color: rgba(120, 144, 156,1.0) !important;
			
		}
		
		.btn:focus, .btn:active:focus, .btn.active:focus {
			
			outline: none !important;
			box-shadow: 0 0px 0px rgba(120, 144, 156,1.0) inset, 0 0 0px rgba(120, 144, 156,0.8);
}


textarea:focus,
		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="datetime"]:focus,
		input[type="datetime-local"]:focus,
		input[type="date"]:focus,
		input[type="month"]:focus,
		input[type="time"]:focus,
		input[type="week"]:focus,
		input[type="number"]:focus,
		input[type="email"]:focus,
		input[type="url"]:focus,
		input[type="search"]:focus,
		input[type="tel"]:focus,
		input[type="color"]:focus,
		.uneditable-input:focus {   
		border-color: rgba(120, 144, 156,1.0); color: rgba(120, 144, 156,1.0); opacity: 0.9;
		box-shadow: 0 0px 0px rgba(120, 144, 156,1.0) inset, 0 0 10px rgba(120, 144, 156,0.3);
		outline: 0 none; }


.card::-webkit-scrollbar {
    width: 3px;
}

.card-body::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-thumb {
    border-radius: 9px;
	background: rgba(96, 125, 139,0.99);
}

.balon1, .balon2 {

	margin-top: 5px !important;
	margin-bottom: 5px !important;

	}


.balon1 a {

	background: #42a5f5;
	color: #fff !important;
	border-radius: 20px 20px 3px 20px;
	display: block;
	max-width: 75%;
	padding: 7px 13px 7px 13px;

	}

.balon1:before {

	content: attr(data-is);
	position: absolute;
	right: 15px;
	bottom: -0.8em;
	display: block;
	font-size: .750rem;
	color: rgba(84, 110, 122,1.0);
	
	}

.balon2 a {

	background: #f1f1f1;
	color: #000 !important;
	border-radius: 20px 20px 20px 3px;
	display: block;
	max-width: 75%;
	padding: 7px 13px 7px 13px;
	
	}
	
.balon2:before {

	content: attr(data-is);
	position: absolute;
	left: 13px;
	bottom: -0.8em;
	display: block;
	font-size: .750rem;
	color: rgba(84, 110, 122,1.0);
  
	}
	
.bg-sohbet:before {

	content: "";
	background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
	opacity: 0.06;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height:100%;
	position: absolute;   
	}
	.list-chat.table td {
    padding: 2px!important;
    vertical-align: middle;
    border-top: 0.0625rem solid #e3e3e3;
	}


	/* badge */
	.badge {
		margin-top: 3px!important;
    margin-bottom: 3px!important;
    border-radius: 0.5rem!important;
	}
	



	.main-panel{
		border-top: 2px solid #da251c !important;
	}

	.sidebar-wrapper{
		background-color: #da251c !important;
		border-radius: inherit;
	}

	.card-header, .bg-primary {
    background-color: #da251c !important;
	}

	.white-content h1, .white-content h2, .white-content h3, .white-content h4, .white-content h5, .white-content h6, .white-content p, .white-content ol li, .white-content ul li, .white-content pre {
    
	}

	.white-content h6{
		color: #fafafa;
		font-size:14px;
	}

	.nav>li>a {
		font-size:12px!important;
	}

	.nav-tabs {
		margin-top:15px!important;
    border-bottom: 0px!important;
	}	

	.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #fafafa;
    background-color: #8a1812;
		border-color: !important;
	}

	.btn-primary.btn-simple {
		color: #da251c !important;
		border-color: #da251c !important;
    background: transparent;
	}

	.btn-primary.btn-simple-white {
		color: #fafafa !important;
		border-color: #fafafa !important;
    background: transparent;
	}

	.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .btn-primary:active:focus, .btn-primary:active:hover, .btn-primary.active:focus, .btn-primary.active:hover{
		background-color: #da251c !important;
    background-image: linear-gradient(#da251c, #da251c)!important;
	}

	.table .table {
    background-color: #dcdcdc!important;
		border-radius: 5px;
	}

	.table th, .table td {
    padding: 0rem!important;
    vertical-align: middle!important;
    border-top: 0.0625rem solid #e3e3e3!important;
}

	.navbar-brand{
		position: relative !important;
}
.perfect-scrollbar-on .sidebar, .perfect-scrollbar-on .main-panel {
    height: 140px;
		/* max-height: 100%; */
		position: absolute;
}

  </style>
</head>
<div class="content" style="display:none">
  <div class="row">
    <!-- <div class="col-12 menu-cs visitor_online">
      <div class="card">
        <div class="card-header ">
          <div class="row">
            <div class="col-sm-6 text-left">
              <h5 class="card-category">Total Visitor</h5>
              <h2 class="card-title">Today</h2>
            </div>
            <div class="col-sm-6">
              <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                <label class="btn btn-sm btn-primary btn-simple active" id="0">
                  <input type="radio" name="options" checked>
                  <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Accounts</span>
                  <span class="d-block d-sm-none">
                    <i class="tim-icons icon-single-02"></i>
                  </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple" id="1">
                  <input type="radio" class="d-none d-sm-none" name="options">
                  <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Purchases</span>
                  <span class="d-block d-sm-none">
                    <i class="tim-icons icon-gift-2"></i>
                  </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple" id="2">
                  <input type="radio" class="d-none" name="options">
                  <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sessions</span>
                  <span class="d-block d-sm-none">
                    <i class="tim-icons icon-tap-02"></i>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="chartBig1" height="50px"></canvas>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-12 menu-cs visitor_online" id="table_visitor">

    </div>
    
  </div>
  <div class="row">
    <div class="col-lg-8 col-md-12 menu-cs chat_list">
      <div class="card border-0 rounded" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01); overflow: hidden;">
        <div class="card-header p-1 bg-primary" style="color: rgba(96, 125, 139,1.0);">
          <!-- <img class="rounded float-left" style="width: 50px; height: 50px;" src="" /> -->
            
            <!-- <i class="fa fa fa-circle text-success float-left" aria-hidden="true" style="margin: 12px 0 12px 12px; font-size:8px"></i>  -->
            <h6 class="float-left chat_name" style="margin: 10px">
              <br>
              <!-- <small> İstanbul, TR </small> -->
            </h6>

            <div class="dropdown">
              <button id="dropdownMenuLink" data-toggle="dropdown" class="btn btn-sm btn-primary btn-simple-white float-right" role="button">
                  <i class="fa fa-ellipsis-h" title="Ayarlar!" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right border p-0" aria-labelledby="dropdownMenuLink">                
              <a class="dropdown-item p-2" href="#"> <i class="fa fa-user m-1" aria-hidden="true"></i> Profile </a>
              <hr class="my-1"></hr>
              <a class="dropdown-item p-2" href="#"> <i class="fa fa-trash m-1" aria-hidden="true"></i> Delete </a>
              </div>
            </div>
        </div>
        <div class="card bg-sohbet border-0 m-0 p-0" style="height: 65vh;">
          <div id="sohbet" class="card border-0 m-0 p-0 position-relative bg-transparent" style="overflow-y: auto; height: 100vh;">
            <div class="row justify-content-center align-items-center" style="margin: auto;">
              <h4>Please select a chat to start messaging.</h4>
            </div>
          </div>
        </div>
        <div class="w-100 card-footer">
          <form class="m-0 p-0" action="" method="POST" autocomplete="off" id="form_chat">
            <div class="row m-0 p-0">
              <div class="col-10 m-0 p-1 my-auto">
                <input id="text" class="mw-100 border rounded form-control" type="text" name="text" title="Type a message..." placeholder="Type a message..." required>
              </div>
              <div class="col-2 m-0 p-1">
                <button id="btn_send" class="btn btn-primary btn-simple border w-100" title="Gönder!" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  <!-- </div>
  <div class="row">
    <div class="col-lg-8 col-md-12 menu-cs chat_list">
      <div class="card user_online">
        <div class="card-header">
          <h4 class="card-title"> Simple Table</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table tablesorter " id="">
              <thead class=" text-primary">
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Country
                  </th>
                  <th>
                    City
                  </th>
                  <th class="text-center">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Dakota Rice
                  </td>
                  <td>
                    Niger
                  </td>
                  <td>
                    Oud-Turnhout
                  </td>
                  <td class="text-center">
                    $36,738
                  </td>
                </tr>
                <tr>
                  <td>
                    Minerva Hooper
                  </td>
                  <td>
                    Curaçao
                  </td>
                  <td>
                    Sinaai-Waas
                  </td>
                  <td class="text-center">
                    $23,789
                  </td>
                </tr>
                <tr>
                  <td>
                    Sage Rodriguez
                  </td>
                  <td>
                    Netherlands
                  </td>
                  <td>
                    Baileux
                  </td>
                  <td class="text-center">
                    $56,142
                  </td>
                </tr>
                <tr>
                  <td>
                    Philip Chaney
                  </td>
                  <td>
                    Korea, South
                  </td>
                  <td>
                    Overland Park
                  </td>
                  <td class="text-center">
                    $38,735
                  </td>
                </tr>
                <tr>
                  <td>
                    Doris Greene
                  </td>
                  <td>
                    Malawi
                  </td>
                  <td>
                    Feldkirchen in Kärnten
                  </td>
                  <td class="text-center">
                    $63,542
                  </td>
                </tr>
                <tr>
                  <td>
                    Mason Porter
                  </td>
                  <td>
                    Chile
                  </td>
                  <td>
                    Gloucester
                  </td>
                  <td class="text-center">
                    $78,615
                  </td>
                </tr>
                <tr>
                  <td>
                    Jon Porter
                  </td>
                  <td>
                    Portugal
                  </td>
                  <td>
                    Gloucester
                  </td>
                  <td class="text-center">
                    $98,615
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-lg-4 col-md-12 menu-cs chat_list">
      <div class="card card-tasks">
        <div class="card-header ">
          <h6 class="title d-inline">Active Chat</h6>
          <!-- <p class="card-category d-inline">today</p> -->
          <div class="dropdown">
            <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
              <!-- <i class="tim-icons icon-settings-gear-63"></i> -->
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#pablo">Action</a>
              <a class="dropdown-item" href="#pablo">Another action</a>
              <a class="dropdown-item" href="#pablo">Something else</a>
            </div>
          </div>
        </div>
        <div class="card-body" id="listchat"><i class="tim-icons icon-minimal-down pull-right"></i>
        <h6 class="card-title" data-toggle="collapse" data-target="#demo">
          Simple collapsible (0)</h6>
          <div id="demo" class="table table-responsive collapse">
            <table class="table list-chat">
              <tbody>
                
              </tbody>
            </table>
          </div>
          <div class="table table-responsive">
            <table class="table list-chat">
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-8 col-md-12 menu-cs user_online">
      <div class="card user_online">
        <div class="card-header">
          <h4 class="card-title"> Simple Table</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table tablesorter " id="">
              <thead class=" text-primary">
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Country
                  </th>
                  <th>
                    City
                  </th>
                  <th class="text-center">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Dakota Rice
                  </td>
                  <td>
                    Niger
                  </td>
                  <td>
                    Oud-Turnhout
                  </td>
                  <td class="text-center">
                    $36,738
                  </td>
                </tr>
                <tr>
                  <td>
                    Minerva Hooper
                  </td>
                  <td>
                    Curaçao
                  </td>
                  <td>
                    Sinaai-Waas
                  </td>
                  <td class="text-center">
                    $23,789
                  </td>
                </tr>
                <tr>
                  <td>
                    Sage Rodriguez
                  </td>
                  <td>
                    Netherlands
                  </td>
                  <td>
                    Baileux
                  </td>
                  <td class="text-center">
                    $56,142
                  </td>
                </tr>
                <tr>
                  <td>
                    Philip Chaney
                  </td>
                  <td>
                    Korea, South
                  </td>
                  <td>
                    Overland Park
                  </td>
                  <td class="text-center">
                    $38,735
                  </td>
                </tr>
                <tr>
                  <td>
                    Doris Greene
                  </td>
                  <td>
                    Malawi
                  </td>
                  <td>
                    Feldkirchen in Kärnten
                  </td>
                  <td class="text-center">
                    $63,542
                  </td>
                </tr>
                <tr>
                  <td>
                    Mason Porter
                  </td>
                  <td>
                    Chile
                  </td>
                  <td>
                    Gloucester
                  </td>
                  <td class="text-center">
                    $78,615
                  </td>
                </tr>
                <tr>
                  <td>
                    Jon Porter
                  </td>
                  <td>
                    Portugal
                  </td>
                  <td>
                    Gloucester
                  </td>
                  <td class="text-center">
                    $98,615
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4 menu-cs setting">
      <div class="card card-chart">
        <div class="card-header">
          <h5 class="card-category">Total Shipments</h5>
          <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="chartLinePurple"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 menu-cs setting">
      <div class="card card-chart">
        <div class="card-header">
          <h5 class="card-category">Daily Sales</h5>
          <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="CountryChart"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 menu-cs setting">
      <div class="card card-chart">
        <div class="card-header">
          <h5 class="card-category">Completed Tasks</h5>
          <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100K</h3>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="chartLineGreen"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
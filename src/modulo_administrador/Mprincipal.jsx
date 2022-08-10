

const Mprincipal = () => {
  return (
    <div class="content-wrapper">
    <div class="row">
      <div class="col-sm-12 mb-4 mb-xl-0">
        <h4 class="font-weight-bold text-dark">Hola,</h4>
        <p class="font-weight-normal mb-2 text-muted">APRIL 1, 2019</p>
      </div>
    </div>
    
    <div class="row mt-3">
            <div class="col-xl-3 flex-column d-flex grid-margin stretch-card">
              <div class="row flex-grow">
                <div class="col-sm-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Customers</h4>
                          <p>23% increase in conversion</p>
                          <h4 class="text-dark font-weight-bold mb-2">43,981</h4>
                          <canvas id="customers"></canvas>
                      </div>
                    </div>
                </div>
                <div class="col-sm-12 stretch-card">
                    <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Orders</h4>
                          <p>6% decrease in earnings</p>
                          <h4 class="text-dark font-weight-bold mb-2">55,543</h4>
                          <canvas id="orders"></canvas>
                      </div>
                    </div>
               </div>
              </div>
            </div>
            <div class="col-xl-9 d-flex grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                      <h4 class="card-title">Website Audience Metrics</h4>
                      <div class="row">
                        <div class="col-lg-5">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet cumque cupiditate</p>
                        </div>
                        <div class="col-lg-7">
                          <div class="chart-legends d-lg-block d-none" id="chart-legends"></div>
                        </div>
                      </div>
                      <div class="row">
                          <div class="col-sm-12">
                              <canvas id="web-audience-metrics-satacked" class="mt-3"></canvas>
                          </div>
                      </div>
                        
                        


                    </div>
                  </div>
            </div>
          </div>
     
          <div className="row">

          <div class="col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between mb-3">
                          <h4 class="card-title">Market Trends</h4>
                          <div class="dropdown">
                              <button class="btn btn-sm dropdown-toggle text-dark pt-0 pr-0" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  This week
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                                <h6 class="dropdown-header">This week</h6>
                                <h6 class="dropdown-header">This month</h6>
                              </div>
                            </div>
                      </div>
                      <div id="chart-legends-market-trend" class="chart-legends mt-1">
                      </div>
                      <div class="row mt-2 mb-2">
                        <div class="col-6">
                          <div class="text-small"><span class="text-success">18.2%</span> higher </div>
                        </div>
                        <div class="col-6">
                          <div class="text-small"><span class="text-danger">0.7%</span> higher </div>
                        </div>
                      </div>
                      <div class="marketTrends mt-4">
                        <canvas id="marketTrendssatacked"></canvas>
                      </div>
                        
                    </div>
                  </div>
              </div>

          </div>

           

  
    </div>)}

export default Mprincipal
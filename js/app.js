Vue.component("TopNav", {
  template: `
   <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="collapse navbar-collapse show" id="navbar-mobile">
            <ul class="nav navbar-nav mr-auto float-left">
              <li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
              <li class="nav-item d-none d-md-block"><a class="nav-link nav-link-expand" href="#"><i class="ficon ft-maximize"></i></a></li>
              
            </ul>

            <ul class="nav navbar-nav float-right">

              <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
              <span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/Oqueli.jpeg" alt="avatar"><i></i></span></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="arrow_box_right">
                  <a class="dropdown-item" href="#">
                    <span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/Oqueli.jpeg" alt="avatar">
                      <span class="user-name text-bold-700 ml-1">Sr. Oqueli</span>
                    </span>
                  </a>
                    <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="cotizaciones.html"><i class="ft-check-square"></i> Cotizaciones</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="ft-power"></i> Salir</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `
});

Vue.component("SideNavIni", {
  template: `
  <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">       
          <li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/forklift.png"/>
              <h3 class="brand-text">Oqueli's</h3></a></li>
          <li class="nav-item d-md-none"><a class="nav-link close-navbar"><i class="ft-x"></i></a></li>
        </ul>
      </div>
      <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li class="active"><a href="index.html"><i class="ft-home"></i><span class="menu-title" data-i18n="">Inicio</span></a>
          </li>
          <li class=" nav-item"><a href="cotizaciones.html"><i class="ft-pie-chart"></i><span class="menu-title" data-i18n="">Cotizaciones</span></a>
          </li>

        </ul>
      </div>
      <div class="navigation-background"></div>
    </div>
  `
});

Vue.component("SideNavCoti", {
  template: `
  <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">       
          <li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/forklift.png"/>
              <h3 class="brand-text">Oqueli's</h3></a></li>
          <li class="nav-item d-md-none"><a class="nav-link close-navbar"><i class="ft-x"></i></a></li>
        </ul>
      </div>
      <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li class=" nav-item"><a href="index.html"><i class="ft-home"></i><span class="menu-title" data-i18n="">Inicio</span></a>
          </li>
          <li class="active"><a href="cotizaciones.html"><i class="ft-pie-chart"></i><span class="menu-title" data-i18n="">Cotizaciones</span></a>
          </li>

        </ul>
      </div>
      <div class="navigation-background"></div>
    </div>
  `
});

Vue.component("BFooter", {
  template: `
  <footer class="footer footer-static footer-light navbar-border navbar-shadow ">
    <div class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
      <span class="float-md-left d-block d-md-inline-block">
        2018 &copy; Copyright
        <a
          class="text-bold-800 grey darken-2"
          href="https://themeselection.com"
          target="_blank"
        >
          ThemeSelection
        </a>
      </span>
    </div>
  </footer>
  `
});

//componente padre
new Vue({
  el: "#app",

  data() {
    return {
      peso: 0,
      precio_hora: 900,
      fecha: "2020-01-01",
      dia: "",
      hora_inicio: "00:00",
      hora_fin: "00:00",
      precio: 0,
      precio_isv: 0,
      precio_flete: 0
    };
  },

  created() {
    console.log("Created...");
  },

  mounted() {
    console.log("Mounted...");
  },

  computed: {
    //funciones que retornan valores
    CalcularPrecio() {
      let options = {
        weekday: "short"
      };

      let date = new Date(this.fecha.replace(/-+/g, "/"));
      let dia_semana = date.toLocaleDateString("es-MX", options);
      let horas_trabajadas = 0;

      if (this.peso == 1) {
        this.precio_hora = 1100;
      } else {
        this.precio_hora = 900;
      }

      // console.log(this.hora_inicio, this.hora_fin);

      if (this.hora_inicio > this.hora_fin) {
        this.precio_hora = 0;
      } else {
        horas_trabajadas = Math.ceil(
          parseFloat(this.hora_fin) +
            this.hora_fin.substr(3, 2) / 60 -
            (parseFloat(this.hora_inicio) + this.hora_inicio.substr(3, 2) / 60)
        );
        // console.log(
        //   horas_trabajadas,
        //   parseInt(this.hora_inicio),
        //   this.hora_fin.substr(3, 2) / 60
        // );

        if (dia_semana == "dom.") {
          this.precio_hora *= 2;
          console.log("Domingo 100% mas");
        } else if (
          dia_semana == "sáb." &&
          (this.hora_inicio < "06:00" || this.hora_inicio > "12:00")
        ) {
          this.precio_hora *= 1.5;
          console.log("sabado 50% mas");
        } else if (this.hora_inicio < "06:00" || this.hora_inicio > "12:00") {
          this.precio_hora *= 1.5;
          console.log("cualquier dia fuera de hora laboral 50% mas");
        } else {
        }
      }

      return this.precio_hora * horas_trabajadas;
    },
    isv() {
      return this.CalcularPrecio * 0.15;
    },

    total() {
      return this.isv + this.CalcularPrecio;
    }
  },

  watch: {
    //funciones que se ejecutan como unu trigger, al cambiar el valor de un datos
  },

  methods: {
    //metodos que se ejecutan sin devolver valores
  }
});

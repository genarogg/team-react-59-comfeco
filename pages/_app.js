/* estilos de las librerias */
import "../styles/lib/normalize.scss";
import "../styles/lib/flexboxGrid.scss";
import "../styles/icons/style.css";

/* Estilos globales */
import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/footer.scss";

/* Estilos de los componentes de los formularios de registro */
import "../styles/form/formRegisterLogin.scss";
import "../styles/form/newPassword.scss";

import "../styles/form/loginRedes.scss";


/* css del slider */
import "../styles/slider/swiper.scss";
import "../styles/slider/estilos.scss";
import "../styles/slider/sliderSleader.scss";
import "../styles/slider/sliderSponsors.scss";
/* css para cambiar los colores de la interfas (Proximaente)*/
import "../styles/colorChange.scss";
import "../styles/form/newPassword.scss";
import "../styles/form/editProfile.scss";
import "../styles/dashboard.scss";

/* Clase para meter nuevos estilos (Uxiliar) */
import "../styles/demo.scss";
import "../styles/404/404.scss";

/* css de las paginas */
import "../styles/homeLogin.scss";

/* Estilos del Deadline */
import "../styles/deadline.scss";

/* estilos para botones */
import "../styles/button/btn1.scss";
import "../styles/button/btnHamburguesa.scss";

/* estilos perfil */
import "../styles/perfil/miPerfil.scss";

import { Provider } from "next-auth/client";

import "../styles/perfil/perfil.scss";
import "../styles/cards.scss";
import "../styles/perfil/cardEvents.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

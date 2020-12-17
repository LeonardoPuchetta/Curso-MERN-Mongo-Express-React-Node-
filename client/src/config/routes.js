// importacion del Layout

import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// importacion de las paginas de Admin : 
// desde el componente se hace una export default 
// da igual nombre que le pongamos a "AdminHome" , siempre se va a importar 
//el componente Admin 

//Admin pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SingIn';


//pages 
import Home from '../pages/Home';
import Contact from '../pages/Contact';

//Others 
import Error404 from '../pages/Error404' ;


// configuracion del sistema de rutas 
// desde aqui podemos cambiar todo el sistema de rutas 
const routes = [{

     path : "/admin",
     component: LayoutAdmin,
     exact : false,
     routes : [{                       // array de rutas anidado , rutas hijas 
          path : "/admin",
          component: AdminHome,
          exact : true
               },
               {
          path : "/admin/login",
          component: AdminSignIn,
          exact:true        
               },
               {
          component : Error404 ,      
               }
          ]
     },
     {
     path : "/",  // partimos de la raiz 
     exact : false, // porque tendra subrutas 
     component : LayoutBasic,
     routes : [ {                // rutas hijas 

          path : "/",
          component: Home,
          exact : true
               },
               {
          path : "/Contact",
          component: Contact,
          exact:true        
               },
               {
          component : Error404 ,      
               }

     ]   
     
     }
]

export default routes 


import { Route } from 'react-router-dom';
import { setupIonicReact, IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'
import Show from './page/show';
import Form from './page/form';
import DataProvider from './page/context';
import Header from './page/Header';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <DataProvider>
        <IonReactRouter>
          <IonSplitPane contentId='main-menu'>
            <Header />
            <IonRouterOutlet id='main-menu'>
              <Route path='/' component={Show} />
              <Route path='/form' component={Form} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </DataProvider>
    </IonApp>
  )
}
export default App;


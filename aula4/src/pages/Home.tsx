import { IonAvatar, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Aula 4</IonTitle>

          <IonAvatar slot='end'>
            <img src="https://avatars.githubusercontent.com/u/50325188?v=4" alt="android avatar" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aula 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton expand='full' routerLink='/menu'>Menu</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

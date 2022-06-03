import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NumberDetective from '../components/NumberDetective';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jodo da adivinhação</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NumberDetective />
      </IonContent>
    </IonPage>
  );
};

export default Home;

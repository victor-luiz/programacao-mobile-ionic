import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='page'>
        <h1>Victor Luiz</h1>
        <a href="https://github.com/victor-luiz">GitHub</a>
        <img src="https://avatars.githubusercontent.com/u/50325188?v=4" alt="foto-github" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

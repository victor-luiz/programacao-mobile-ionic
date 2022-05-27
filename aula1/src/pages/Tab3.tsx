import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [grade, setGrade] = useState<number>(0);
  const [frequency, setFrequency] = useState<number>(0);
  const [situation, setSituation] = useState('');

  function handleCheckSituation() {
    if (grade < 4 || frequency < 75) {
      setSituation('Reprodvado');
    } else if (grade < 6) {
      setSituation('Recuperaão')
    } else {
      setSituation('Aprovado')
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Situacão do aluno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='principal' fullscreen>
        <IonLabel>Nota</IonLabel>
        <IonInput
          type='number'
          min={0}
          max={10}
          placeholder="Informe a nota"
          onIonChange={event => setGrade(Number(event.detail.value!))}
        />
        <IonLabel>Frequência</IonLabel>
        <IonInput
          type='number'
          min={0}
          max={100}
          placeholder="Informe a frequência"
          onIonChange={event => setFrequency(Number(event.detail.value!))}
        />
        <IonButton color="primary" onClick={handleCheckSituation}>Consultar situação</IonButton>
        <IonLabel>{situation}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

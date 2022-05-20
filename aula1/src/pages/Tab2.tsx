import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [imc, setImc] = useState<number>();
  const [classification, setClassification] = useState<string>();

  function handleCalcIMC() {
    const result = weight / Math.pow(height, 2);
    setImc(result)
    rankImc(result);
  }
  
  function rankImc(value: number) {
    if (value && value >= 0) {
      if (value < 18.5) {
        setClassification('Abaixo do peso normal');
      } else if (value < 25) {
        setClassification('Peso normal');
      } else if (value < 30) {
        setClassification('Excesso de peso');
      } else if (value < 35) {
        setClassification('Obesidade classe I');
      } else if (value < 40) {
        setClassification('Obesidade classe II');
      } else {
        setClassification('Obesidade classe III');
      }
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calcular IMC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel>Altura</IonLabel>
        <IonInput
          type='number'
          placeholder="Informe altura"
          onIonChange={event => setHeight(Number(event.detail.value!))}
        />
        <IonLabel>Altura</IonLabel>
        <IonInput
          type='number'
          placeholder="Informe peso"
          onIonChange={event => setWeight(Number(event.detail.value!))}
        />
        <IonButton color="primary" onClick={handleCalcIMC}>Calcular IMC</IonButton>
        <IonInput
          type='number'
          disabled
          value={imc}
        />
        <IonLabel>{classification}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

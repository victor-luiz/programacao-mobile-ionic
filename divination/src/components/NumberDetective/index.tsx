import { IonButton, IonInput, IonItem, IonLabel, useIonToast } from '@ionic/react';
import { checkmarkCircleOutline , chevronDownCircleOutline, chevronUpCircleOutline } from 'ionicons/icons'
import { useState } from 'react';

interface ContainerProps { }

const NumberDetective: React.FC<ContainerProps> = () => {
  const [attempts, setAttempts] = useState<number>();
  const [number, setNumber] = useState<number>();
  const [numberCheck, setNumberCheck] = useState<number>();
  const [isStarPlay, setIsStarPlay] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const [present] = useIonToast();

  function handlePlay() {
    if (attempts) {
      executePlay()
    }
  }

  function handleInitializeMath() {
    setAttempts(8);
    setNumberCheck(generatorNumber());
    setIsStarPlay(true);
    setIsWinner(false);
  }

  function generatorNumber(): number {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }

  function executePlay() {
    if (number && numberCheck) {
      if (number === numberCheck) {
        callToast('Você acertou o número!', 'success', checkmarkCircleOutline);
        setIsWinner(true);        
      } else if (number > numberCheck) {
        callToast('O número é menor!', 'warning', chevronDownCircleOutline);
        downgradedAttempts();
      } else if (number < numberCheck) {
        callToast('O número é maior!', 'warning', chevronUpCircleOutline);
        downgradedAttempts();
      }
    }
  }

  function downgradedAttempts() {
    setAttempts(attempts! - 1);
  }

  function callToast(message: string, color: string, icon: string) {
    present({
      message,
      color,
      duration: 1000,
      position: 'middle',
      icon,
    });
  }


  return (
    <div className="container">
      <h1>Adivinhe o número</h1>
      <IonInput
        type='number'
        min={1}
        max={100}
        placeholder="Digite um número"
        onIonChange={event => setNumber(Number(event.detail.value!))}
      />
      <IonButton
        disabled={!isStarPlay || isWinner || !number || attempts! < 1}
        onClick={handlePlay}
      >
        Tentar adivinhar
      </IonButton>
      <IonItem>
        <IonLabel>Tentativas res: </IonLabel>
        <IonLabel>{attempts}</IonLabel>
      </IonItem>
      <IonButton
        onClick={handleInitializeMath}
      >
        {isStarPlay ? 'Reiniciar partida' : 'Iniciar partida'}
      </IonButton>
    </div>
  );
};

export default NumberDetective;

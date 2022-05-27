import { IonButton, IonInput, IonItem, IonLabel, useIonToast } from '@ionic/react';
import { warningOutline } from 'ionicons/icons'
import { useState } from 'react';
// import './styles.css';

interface ContainerProps { }

const Calculator: React.FC<ContainerProps> = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState<number | null>();

  const [present] = useIonToast();

  function handleSum() {
    if (number1 && number2) {
      setResult(number1 + number2)
    } else {
      callToast('Número não informado')
    }
  }

  function handleSubtract() {
    if (number1 && number2) {
      setResult(number1 - number2)
    } else {
      callToast('Número não informado')
    }
  }

  function handleMultiply() {
    if (number1 && number2) {
      setResult(number1 * number2)
    } else {
      callToast('Número não informado')
    }
  }

  function handleDivision() {
    if (number1 && number2) {
      setResult(number1 / number2)
    } else {
      callToast('Número não informado')
    }
  }

  function handleSquareRoot() {
    if (number1) {
      setResult(Math.sqrt(number1))
    } else if (number2) {
      setResult(Math.sqrt(number2))
    } else {
      callToast('Número não informado')
    }
  }

  function handleCalcFactorial() {
    if (number1) {
      calcFactorial(number1)
    } else if (number2) {
      calcFactorial(number2)
    } else {
      callToast('Número não informado')
    }
  }

  function calcFactorial(value: number) {
    let total = 1
    for (let i = value; i > 0; i--) {
      total = total * i; 
    }
    setResult(total)
  }


  function callToast(message: string) {
    present({
      message,
      color: 'warning',
      duration: 2000,
      position: 'bottom',
      icon: warningOutline,
    });
  }


  return (
    <div className="container">
      
      <IonItem>
        <IonInput
          type='number'
          placeholder='Informe um número'
          onIonChange={event => setNumber1(Number(event.detail.value!))} 
        />
      </IonItem>
      <IonItem>
        <IonInput
          type='number'
          placeholder='Informe um número' 
          onIonChange={event => setNumber2(Number(event.detail.value!))} 
        />
      </IonItem>
      <IonButton expand='full' onClick={handleSum}>+</IonButton>
      <IonButton expand='full' onClick={handleSubtract}>-</IonButton>
      <IonButton expand='full' onClick={handleMultiply}>x</IonButton>
      <IonButton expand='full' onClick={handleDivision}>/</IonButton>
      <IonButton expand='full' onClick={handleSquareRoot}>√</IonButton>
      <IonButton expand='full' onClick={handleCalcFactorial}>!</IonButton>
      <IonItem>
        <IonLabel>{result}</IonLabel>
      </IonItem>
    </div>
  );
};

export default Calculator;

import { IonButton, IonCheckbox, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [theme, setTheme] = useState<string>();
  const [themes, setThemes] = useState([
    { theme: 'Banco de dados', isChecked: true },
    { theme: 'Programação', isChecked: false },
    { theme: 'Redes', isChecked: false },
    { theme: 'Web', isChecked: false }
  ])

  function handleAddTheme() {
    if (theme) {
      const newTheme = { theme, isChecked: false };
      setThemes(oldThemes => [...oldThemes, newTheme])
    }
  }

  return (
    <div>
      <IonItem>
        <IonLabel>Novo tema: </IonLabel>
        <IonInput 
          placeholder='Digite o tema'
          onIonChange={event => setTheme(event.detail.value!)}
        />
      </IonItem>
      <IonButton onClick={handleAddTheme} expand='full'>Adicionar</IonButton>
      
      <h1>Temas de interesse</h1>

      {
        themes.map(({theme, isChecked}, i) => (
          <IonItem key={i}>
            <IonLabel>{theme}</IonLabel>
            <IonCheckbox slot='end' value={theme} checked={isChecked} color='success'/>
          </IonItem>
        ))
      }
    </div>
  );
};

export default ExploreContainer;

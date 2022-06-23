import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { menuController } from "@ionic/core/components"

const Menu: React.FC = () => {

  function handleOpenMenu(){
    console.log('cheguei')
    console.log(menuController.open('oi'));
  }

  return (
    <>
      <IonMenu side="start" menuId="oi">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton contextMenu="first" onClick={handleOpenMenu}>Abrir menu</IonButton>
          <IonButtons slot="start">
            <IonMenuButton color="success" mode="md" />
          </IonButtons>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Menu;
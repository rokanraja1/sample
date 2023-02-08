import {
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonListHeader,
  IonList
} from '@ionic/react';
const Header: React.FC = () => {
  return (
    <IonMenu contentId='main-menu' type='overlay'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Items</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>Links</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={'/'} routerDirection='none' lines='none'>
              <IonLabel>Show</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem lines='none' routerDirection='none' routerLink={'/form'} >
              <IonLabel>Form</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
export default Header;
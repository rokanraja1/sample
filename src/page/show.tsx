import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
} from '@ionic/react';
import { ContextStructure,Dtype } from './context';
import { useContext } from 'react';
import { DataContext } from './context';
const Show: React.FC = () => {
  const {data} = useContext(DataContext)as ContextStructure
  return (
      <>
      <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton></IonMenuButton>
              <IonTitle>Details</IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data.map((value:Dtype,index:number)=>(
              <IonCard key={index}>
                <IonCardContent>Name: {value.name}</IonCardContent>
                <IonCardContent>Age: {value.age}</IonCardContent>
                <IonCardContent>Phone: {value.phone}</IonCardContent>
                <IonCardContent>Marital Status: {value.status?'Married':'Single'}</IonCardContent>
              </IonCard>
          ))
          }
        </IonContent>
      </IonPage>
    </>
  );
};

export default Show;
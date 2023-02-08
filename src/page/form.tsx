import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonContent,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { DataContext } from './context';
import { ContextStructure } from './context';
import React,{ useContext, useEffect, useState, useRef } from 'react';
const Form: React.FC = () => {
  const [name,SetName]=useState('')
  const [age,SetAge]=useState(0)
  const [phone,SetPhone]=useState(0)
  const [status,SetStatus]=useState(false)
  const { savedata } = useContext(DataContext) as ContextStructure
  const nameref = useRef<HTMLIonInputElement>(null)
  const onSubmit = () =>{
    savedata(name,age,phone,status);
  }
  return (
    <>
      <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton></IonMenuButton>
              <IonTitle>Form</IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput ref={nameref} onIonChange={(e:any)=>{
              SetName(e.target.value)
            }} autocomplete='off' type="text" required ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Age</IonLabel>
            <IonInput onIonChange={(e:any)=>{
              SetAge(e.target.value)
            }}
            autocomplete='off' type="number" required ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Phone</IonLabel>
            <IonInput maxlength={10} defaultValue={phone===0?'':phone} onIonChange={(e:any)=>{
              SetPhone(e.target.value)
            }} autocomplete='off' type="tel" required ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Marital Status</IonLabel>
            <IonSelect onIonChange={(e:any)=>{SetStatus(e.target.value); }} >
              <IonSelectOption value={false} >Single</IonSelectOption>
              <IonSelectOption value={true} >Married</IonSelectOption>
            </IonSelect>
          </IonItem>
          <center>
            <IonButton onClick={(e:any)=>{ onSubmit() }} type="submit" >Submit</IonButton>
          </center>
        </IonContent>
      </IonPage>
    </>
  );
};
export default Form;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import MyCard from "../components/myCard"
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://wheauwyzhygpswjpodrn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat Room</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>
        <MyCard title={Math.random()} text="123"></MyCard>



        <IonItem style={{
          position: "sticky",
          bottom: 0,
          width: "100%",
        }}>
          <IonInput placeholder="Type Here ..."></IonInput>
          <IonButton>Send</IonButton>

        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Home;

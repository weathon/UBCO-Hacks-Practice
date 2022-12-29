import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps {title:any, text: any}

const MyCard: React.FC<ContainerProps> = (prop) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{prop.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {prop.text}
            </IonCardContent>
        </IonCard>
    );
};

export default MyCard;

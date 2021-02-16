<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <a href="/tabs/tab3">
          <ion-icon slot="start" :icon="caretBackOutline" size="large"></ion-icon>
          </a>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
         <ion-card-header>
             <div class="ion-text-center">
              <ion-card-title>Privacy</ion-card-title>
             </div>
             <br>
             
         </ion-card-header>
      </ion-card>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { caretBackOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Privacy.vue',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
      return {
          caretBackOutline,
      }
  }
}

</script>

<style scoped>
  
</style>

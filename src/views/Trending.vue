<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
        <a href="/tabs/tab1">
          <ion-icon slot="start" :icon="caretBackOutline" size="large" color="primary">ㅤ</ion-icon>
          </a>
        <br>
        <div class="ion-text-center">
        <strong>Trending</strong>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-item href="/tabs/tab1" class="ion-activated">
      <ion-icon :icon="wifi" slot="start"></ion-icon>
      <ion-label>Card Link Item 1 activated</ion-label>
    </ion-item>
      </ion-card>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { caretBackOutline, warning, wifi } from 'ionicons/icons';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      caretBackOutline,
      warning,
      wifi
    }
  }
}
</script>

<style scoped>
  
</style>
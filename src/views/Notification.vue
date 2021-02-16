<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
        <br>
        <div class="ion-text-center">
        <strong>Notifications</strong>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="container">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
     <br>
       <div class="ion-text-center">
    
      <img src="/assets/icon/icon.png" id="profileimg" />
    
       </div>
    <ion-list>
      <ion-item>
          <ion-label>New Notifications</ion-label>
          <ion-badge slot="end" color="danger">22k</ion-badge>
        </ion-item>
    </ion-list>
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>

<style scoped>

#profileimg {
  width: 25%;
  border-radius: 50%;
  
}

</style>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
        <br>
        <div class="ion-text-center">
        <strong>Account</strong>
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
    
      <img src="/assets/images/profileimage.JPG" id="profileimg" />
      <br>
    <ion-chip outline color="primary">
      <ion-icon :icon="desktopOutline"></ion-icon>
      <ion-label>Developer</ion-label>
    </ion-chip>
    <ion-chip color="danger">
      <ion-icon :icon="constructOutline"></ion-icon>
      <ion-label>Owner</ion-label>
    </ion-chip>
    <ion-chip  color="tertiary">
      <ion-icon :icon="statsChartOutline"></ion-icon>
      <ion-label>Direktur</ion-label>
    </ion-chip>
        <ion-list>
          <ion-item>
            <ion-label><strong>Privacy & Policy</strong></ion-label>
          <a href="/privacy"> 
            <ion-icon :icon="arrowForwardOutline" size='large'></ion-icon>
            </a>
          </ion-item>
        </ion-list>
        <ion-list>
          <ion-item>
            <ion-label><strong>Settings</strong></ion-label>
            <a href="/tabs/tab1">
              <ion-icon :icon="arrowForwardOutline" size="large"></ion-icon>
            </a>
          </ion-item>
        </ion-list>

       </div>
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { arrowForwardOutline, desktopOutline, codeSlashOutline, constructOutline, statsChartOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, },
  setup() {
    return{
      arrowForwardOutline,
      desktopOutline,
      codeSlashOutline,
      constructOutline,
      statsChartOutline,
  }
}
}

</script>

<style scoped>

#profileimg {
   width: 25%;
  border-radius: 50%;
}

</style>
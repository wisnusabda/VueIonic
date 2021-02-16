<template>
<ion-menu side="start" menu-id="first" content-id="main">
  <ion-header>
    <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Item1</ion-item>
      <ion-item>Item2</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" color="dark"></ion-icon>
          <ion-label color="dark">Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon name="search-outline" color="dark"></ion-icon>
          <ion-label color="dark">Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/notification">
          <ion-icon :icon="mailUnreadOutline" color="danger"></ion-icon>
          <ion-label color="dark">Mail</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
         <ion-icon :icon="personOutline" color="dark"></ion-icon>
          <ion-label color="dark">Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage,  } from '@ionic/vue';
import { ellipse, square, triangle, homeOutline, personOutline, notificationsOutline, mailUnreadOutline, } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage,  },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      homeOutline,
      personOutline,
      notificationsOutline,
      mailUnreadOutline
    }
  }
}
</script>

<style scoped>
  ion-tab-bar{
    
    
    --background: rgb(216, 216, 216);
    
    
  }
</style>
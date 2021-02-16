<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
        <br>
        <div class="ion-text-center">
        <strong>Search</strong>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar color="light" show-cancel-button="focus"></ion-searchbar>
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="primary">
          <ion-icon md="caret-back" ios="chevron-back-circle-outline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
          <ion-fab-button color="primary">
            <ion-icon name="logo-family"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="primary">
            <ion-icon name="logo-twitter"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="primary">
            <ion-icon name="logo-vimeo"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
    
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { add, arrowUpCircle, alertOutline, } from 'ionicons/icons';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, },
  setup() {
    return {
      add,
      arrowUpCircle,
      alertOutline,
    }
  }
}
</script>

<style scoped>
  
</style>
<template>
<ion-page>
    <ion-header id="background">
      <ion-toolbar>
        <ion-title></ion-title>
        <br>
        <div class="ion-text-center">
        <strong>Home</strong>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-list>
        <ion-item>
          <a href="/trending" slot="">
          <ion-chip color="primary" outline>
            <ion-label>Latest</ion-label>
            <ion-icon :icon="newspaperOutline"></ion-icon>
          </ion-chip>
          </a>
          <a href="/trending" slot="start">
          <ion-chip color="danger" outline>
            <ion-label>Trending</ion-label>
            <ion-icon :icon="trendingUpSharp"></ion-icon>
          </ion-chip>
          </a> 
        </ion-item>
      </ion-list>
    <ion-card>
      <img src="/assets/images/image1.jpg" />
      <ion-card-header>
        <ion-card-title><strong>Planet Jupiter</strong></ion-card-title>
        <ion-card-subtitle color="">All the Stories About the Planet Jupiter</ion-card-subtitle>
      </ion-card-header>
      <ion-item>
        <ion-label>Lorem Ipsum is simply dummy text of the printing and typesetting industry</ion-label>
      <ion-button slot="end" href="/card1" class="planetjupiter1">View</ion-button>
      </ion-item>
    </ion-card>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { trendingUpSharp, newspaperOutline } from 'ionicons/icons';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      trendingUpSharp,
      newspaperOutline
    }
  }
}
</script>

<style scoped>
  ion-card{
    --background: rgb(213, 213, 213);
  }

  ion-card-title{
    color: rgb(0, 0, 0);
  }

  ion-card-subtitle{
    color: rgb(0, 0, 0);
  }

  ion-card{
    --background: linear-gradient(  #3700ff, #ddd);
  }

 .planetjupiter1{
   --background: linear-gradient(  #ff0000, rgb(0, 0, 0));
 }

</style>
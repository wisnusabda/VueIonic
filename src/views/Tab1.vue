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
      <ion-list>
        <ion-item>
          <a href="/trending" slot="end">
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
        <ion-card-title><strong>Card Title</strong></ion-card-title>
        <ion-card-subtitle color="">Card 1</ion-card-subtitle>
      </ion-card-header>
      <ion-item>
        <ion-label>ion-item in a card, icon left, button right</ion-label>
      <ion-button fill="outline" slot="end" href="/card1">View</ion-button>
      </ion-item>
    </ion-card>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { trendingUpSharp } from 'ionicons/icons';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      trendingUpSharp
    }
  }
}
</script>

<style scoped>
  ion-card{
    --background: rgb(47, 150, 209);
  }

  ion-card-title{
    color: rgb(0, 0, 0);
  }

  ion-card-subtitle{
    color: rgb(0, 0, 0);
  }

  ion-card{
    --background: linear-gradient( #f4f5f8, #2672f5);
  }


</style>
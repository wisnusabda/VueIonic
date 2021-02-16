<template>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



<div class="ion-text-center">
  <ion-button href="/tabs/tab1">start</ion-button>
</div>
</template>

<script>
import { alertController, IonButton } from '@ionic/vue'
export default {
  components: {IonButton},
  methods: {
    async presentAlertMultipleButtons() {
      const alert = await alertController
      .create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is alert message',
        buttons: ['Cancel', 'Open Modal', 'Delete'],
      });
      return alert.present();
    }
  }
}
</script>

<style>

</style>
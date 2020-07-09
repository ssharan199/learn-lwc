import { LightningElement, track, api } from 'lwc';

export default class HandleButton extends LightningElement {

      clickedButtonLabel = "How are you?";

    handleClickMorning(event) {
        this.clickedButtonLabel = event.target.name;
        this.template.querySelector('p').style.color='blue';

    }
      handleClickAfternoon(event) {
        this.clickedButtonLabel = event.target.name;
        this.template.querySelector('p').style.color='red';
    }
      handleClickEvening(event) {
        this.clickedButtonLabel = event.target.name;
        this.template.querySelector('p').style.color='green';
    }
}

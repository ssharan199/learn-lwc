import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'Good Morning';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}

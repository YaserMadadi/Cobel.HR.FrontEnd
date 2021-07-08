

export class TabItemComponent {

    constructor(isVisible: boolean = false, headLine: string = 'heading') {
        this.isVisible = isVisible;
        this.headLine = headLine;
    }

    public isVisible: boolean = false;

    public headLine: string = '';
}
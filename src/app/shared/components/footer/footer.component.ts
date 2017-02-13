import { Component } from '@angular/core';

@Component({
    selector: 'ww-footer',
    template: `
        <div class="footer">
            <div class="text-center">
                <p>© All rights reserved, 2017</p>
            </div>
        </div>
    `,
    styles: [`
        div.footer{
            background: #000;
            height: 120px;
            width: 100%;
            padding-top: 70px;
        }
    `]
})

export class FooterComponent{
    constructor(){}
}
import { trigger, transition, animate, state, style } from '@angular/core';

export const routeTransition = trigger(
                                        'showPage', [
                                        state('show', style({opacity: 1, transform: 'scale(1.0)'})),
                                        transition('void => *', [
                                            style({
                                                opacity: 0,
                                                transform: 'scale(1.07)'
                                            }),
                                            animate('0.5s ease-out')
                                        ])
                                ])
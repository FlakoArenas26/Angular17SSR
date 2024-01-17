import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, AsyncComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Angular17SSR';

	constructor() {
		afterNextRender(() => {
			console.log(window.location.pathname);
		});
	}
}

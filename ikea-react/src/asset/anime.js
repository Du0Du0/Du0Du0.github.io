export default class Anime {
	constructor(selector, option) {
		this.selector = selector;
		this.option = option;
		this.startTime = performance.now();
		this.currentValue = null;

		this.option.prop === 'scroll' ? (this.currentValue = this.selector.scrollY) : (this.currentValue = parseFloat(getComputedStyle(this.selector)[this.option.prop]));

		this.isString = typeof this.option.value;
		if (this.isString === 'string') {
			const parentW = parseInt(getComputedStyle(this.selector.parentElement).width);
			const parentH = parseInt(getComputedStyle(this.selector.parentElement).height);
			const x = ['margin-left', 'margin-right', 'left', 'right', 'width'];
			const y = ['margin-top', 'margin-bottom', 'top', 'bottom', 'height'];

			for (const cond of x) this.option.prop === cond && (this.currentValue = (this.currentValue / parentW) * 100);
			for (const cond of y) this.option.prop === cond && (this.currentValue = (this.currentValue / parentH) * 100);
			this.option.value = parseFloat(this.option.value);
		}
		this.option.value !== this.currentValue && requestAnimationFrame((time) => this.run(time));
	}

	run(time) {
		let timelast = time - this.startTime;
		let progress = timelast / this.option.duration || 500;
		progress < 0 && (progress = 0);
		progress > 1 && (progress = 1);
		progress < 1 ? requestAnimationFrame((time) => this.run(time)) : this.option.callback && setTimeout(this.option.callback, 0);
		let result = this.currentValue + (this.option.value - this.currentValue) * progress;

		if (this.isString === 'string') this.selector.style[this.option.prop] = `${result}%`;
		else if (this.option.prop === 'opacity') this.selector.style[this.option.prop] = result;
		else if (this.option.prop === 'scroll') window.scroll(0, result);
		else this.selector.style[this.option.prop] = `${result}px`;
	}
}

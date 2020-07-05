
class Logger {
	name: string;
	public constructor(name: string) {
		this.name = name;
	}

	public log(message: string) {
		console && console.log(message);
	}
}

export { Logger };
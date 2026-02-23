interface RybbitAPI {
	event: (name: string, properties?: Record<string, string | number>) => void;
}

interface Window {
	rybbit?: RybbitAPI;
}

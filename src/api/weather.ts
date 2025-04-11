import { env } from "@/utils/env";

export type WeatherData = {
	city: {
		name: string;
		country: string;
	};
	list: Array<{
		dt: number;
		main: {
			temp: number;
			pressure: number;
			humidity: number;
		};
		weather: Array<{
      id: number;
      main: string;
			icon: string;
			description: string;
		}>;
	}>;
};

export const fetchWeather = async (region: string): Promise<WeatherData> => {
	const searchParams = new URLSearchParams({
		q: region,
		units: "metric",
		lang: "ja",
		APPID: env.OPEN_WEATHER_API_KEY,
	});
	const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
	url.search = searchParams.toString();

	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error("Failed to fetch weather data");
	}
	return response.json();
};

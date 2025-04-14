import { WeatherData } from "@/api/weather";
import { useSuspenseQuery } from "@tanstack/react-query";

const fetchAPI = (region: string) => fetch("/api/weather?region=" + region);

export const useWeather = ({ region }: { region: string }) =>
	useSuspenseQuery({
		queryKey: ["weather", region],
		queryFn: () =>
			fetchAPI(region).then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json() as Promise<WeatherData>;
			}),
		staleTime: 1000 * 60 * 10,
	});

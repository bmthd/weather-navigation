'use client'
import { WeatherData } from "@/api/weather";
import { FC } from "react";
import { useWeather } from "./query";
import { SupportRegion } from "./schema";

export const WeatherSection: FC<{ region: SupportRegion }>= ({ region }) => {
	const { data } = useWeather({ region });
	return (
		<ul>
			{data.list.map((item) => (
				<li key={item.dt}>
					<WeatherItem item={item} />
				</li>
			))}
		</ul>
	);
};

const WeatherItem: FC<{ item: WeatherData["list"][number] }> = ({ item }) => {
	const weather = item.weather.at(0);
	return (
		<>
				{weather ? (
					<img
					src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
					alt={weather.description}
				/>
				): "データがありません"}
			<p>気温: {item.main.temp}°C</p>
			<p>日時: {new Date(item.dt * 1000).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
		</>
	);
};
